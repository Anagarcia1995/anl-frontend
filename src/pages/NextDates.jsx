
import { useEffect, useState } from "react";

import {
  Text,
  Box,
  Button,
  useToast,
} from "@chakra-ui/react";

import { showToast } from "../utils/showToast";
import { FiPlus } from "react-icons/fi";

import useNewEventForm from "../hooks/useNewEventForm";
import useEventsData from "../hooks/useEventsData";
import DateNavigation from "../components/Dates/DateNavigation";

import { useAuth } from "../context/AuthContext";
import EventMonthList from "../components/EventMonthList";
import EventForm from "../components/EventForm/EventForm";
import UnsavedChangesModal from "../components/UnsavedChangesModal";

import { fetchEvents } from "../services/eventsService";

import {
  getPastEvents,
  groupEventsByMonth,
} from "../utils/events";

const EVENTS_PER_PAGE = 6;

export default function NextDates() {
  const [activeTab, setActiveTab] = useState("next");

  const [showForm, setShowForm] = useState(false);
  const [activeEditor, setActiveEditor] = useState(null);

  const [showSwitchModal, setShowSwitchModal] = useState(false);
  const [switchTarget, setSwitchTarget] = useState(null);

  const [
    hasActiveEditorChanges,
    setHasActiveEditorChanges,
  ] = useState(false);

  const [pastEvents, setPastEvents] = useState([]);
  const [pastLoading, setPastLoading] = useState(true);

  const [visibleEvents, setVisibleEvents] =
    useState(EVENTS_PER_PAGE);

  const toast = useToast();
  const { isAdmin } = useAuth();

  const {
    eventName,
    setEventName,
    venueName,
    setVenueName,
    ticketUrl,
    setTicketUrl,
    date,
    setDate,
    city,
    defaultDate,
    countryCode,
    filteredCities,
    preferredRegion,
    setPreferredRegion,
    handleCitySearch,
    handleSelectCity,
    resetNewEventForm,
    hasNewEventChanges,
  } = useNewEventForm();

  const {
    events,
    loading,
    handleSaveEvent,
    handleDeleteEvent,
    handleUpdateEvent,
  } = useEventsData({
    toast,
    showToast,
    newEventForm: {
      eventName,
      venueName,
      ticketUrl,
      city,
      defaultDate,
      countryCode,
      date,
      resetNewEventForm,
    },
    onEventCreated: () => {
      setShowForm(false);
    },
  });

  // LOAD PAST EVENTS
  useEffect(() => {
    let mounted = true;

    fetchEvents()
      .then((data) => {
        if (mounted) {
          setPastEvents(getPastEvents(data));
        }
      })
      .catch((error) => {
        console.error(
          "Error loading past events:",
          error
        );
      })
      .finally(() => {
        if (mounted) {
          setPastLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  // ADMIN EDITOR LOGIC
  const handleRequestEdit = (eventId) => {
    if (showForm) {
      if (hasNewEventChanges) {
        setSwitchTarget(eventId);
        setShowSwitchModal(true);
        return;
      }

      setShowForm(false);
      setActiveEditor(eventId);
      return;
    }

    if (
      activeEditor &&
      activeEditor !== eventId
    ) {
      if (hasActiveEditorChanges) {
        setSwitchTarget(eventId);
        setShowSwitchModal(true);
        return;
      }

      setActiveEditor(eventId);
      return;
    }

    setActiveEditor(eventId);
  };

  const handleCancelEdit = () => {
    setActiveEditor(null);
    setHasActiveEditorChanges(false);
  };

  const handleConfirmSwitchEditor = () => {
    setShowForm(false);

    if (switchTarget === "new") {
      setActiveEditor(null);
      resetNewEventForm();
      setShowForm(true);
    } else if (switchTarget === "close-new") {
      resetNewEventForm();
    } else {
      setActiveEditor(switchTarget);
    }

    setSwitchTarget(null);
    setShowSwitchModal(false);
    setHasActiveEditorChanges(false);
  };

  const handleCancelSwitchEditor = () => {
    setSwitchTarget(null);
    setShowSwitchModal(false);
  };

  const handleRequestNewEvent = () => {
    if (
      activeEditor &&
      hasActiveEditorChanges
    ) {
      setSwitchTarget("new");
      setShowSwitchModal(true);
      return;
    }

    setActiveEditor(null);
    resetNewEventForm();
    setShowForm(true);
  };

  const handleCloseNewEvent = () => {
    if (hasNewEventChanges) {
      setSwitchTarget("close-new");
      setShowSwitchModal(true);
      return;
    }

    setShowForm(false);
  };

  // TAB CHANGE
  const handleTabChange = (tab) => {
    if (tab === activeTab) return;

    if (
      showForm &&
      hasNewEventChanges
    ) {
      setSwitchTarget(`tab-${tab}`);
      setShowSwitchModal(true);
      return;
    }

    if (
      activeEditor &&
      hasActiveEditorChanges
    ) {
      setSwitchTarget(`tab-${tab}`);
      setShowSwitchModal(true);
      return;
    }

    setShowForm(false);
    setActiveEditor(null);
    setHasActiveEditorChanges(false);
    setActiveTab(tab);
  };

  // CONFIRM DISCARD CHANGES
  const handleConfirmSwitch = () => {
    if (
      typeof switchTarget === "string" &&
      switchTarget.startsWith("tab-")
    ) {
      const nextTab = switchTarget.replace(
        "tab-",
        ""
      );

      setShowForm(false);
      setActiveEditor(null);
      setHasActiveEditorChanges(false);
      resetNewEventForm();
      setActiveTab(nextTab);

      setSwitchTarget(null);
      setShowSwitchModal(false);
      return;
    }

    handleConfirmSwitchEditor();
  };

  // GROUP EVENTS
  const isPastTab = activeTab === "old";

  const currentEvents = isPastTab
    ? pastEvents.slice(0, visibleEvents)
    : events;

  const currentLoading = isPastTab
    ? pastLoading
    : loading;

  const grouped = groupEventsByMonth(
    currentEvents
  );

  const entries = Object.entries(grouped);

  return (
    <Box
      position="relative"
      w="100%"
      minH="auto"
      isolation="isolate"
      bg="transparent"
      overflow="hidden"
    >
      {/* FIXED BACKGROUND */}
      <Box
        position="fixed"
        top={0}
        left={0}
        w="100vw"
        h="100dvh"
        zIndex={0}
        overflow="hidden"
        pointerEvents="none"
        bg="#080808"
      >
        <Box
          position="absolute"
          inset={0}
          bgImage="url('/images/hero8.jpg')"
          bgSize={{
            base: "140% auto",
            md: "cover",
          }}
          bgPosition={{
            base: "center top",
            md: "center center",
            lg: "center 38%",
          }}
          bgRepeat={{
            base: "repeat-y",
            md: "no-repeat",
          }}
        />
      </Box>

      {/* FIXED LIGHT OVERLAY */}
      <Box
        position="fixed"
        inset={0}
        zIndex={1}
        bg="rgba(230, 230, 230, 0.07)"
        pointerEvents="none"
      />

      {/* PAGE CONTENT */}
      <Box
        position="relative"
        zIndex={2}
        display="flex"
        flexDirection="column"
        w="100%"
        minH="auto"
        maxW="800px"
        mx="auto"
        px={{
          base: 4,
          md: 6,
        }}
        pt={{
          base: "95px",
          md: "150px",
          lg: "180px",
        }}
        pb={{
          base: 8,
          md: 16,
        }}
      >
        <DateNavigation
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />

        {/* UNSAVED CHANGES MODAL */}
        {showSwitchModal && (
          <UnsavedChangesModal
            title={
              switchTarget === "close-new"
                ? "Discard new event?"
                : "Discard changes?"
            }
            onConfirm={handleConfirmSwitch}
            onCancel={
              handleCancelSwitchEditor
            }
          />
        )}

        {/* ADMIN ADD BUTTON */}
        {isAdmin &&
          !showForm &&
          !isPastTab && (
            <Button
              size="sm"
              mb={6}
              variant="outline"
              borderColor="gray.400"
              color="white"
              borderRadius="0"
              transition="all 0.2s ease"
              _hover={{
                bg: "white",
                color: "black",
              }}
              onClick={
                handleRequestNewEvent
              }
            >
              <FiPlus size={23} />
            </Button>
          )}

        {/* ADMIN NEW EVENT FORM */}
        {isAdmin &&
          showForm &&
          !isPastTab && (
            <EventForm
              eventName={eventName}
              setEventName={setEventName}
              venueName={venueName}
              setVenueName={setVenueName}
              ticketUrl={ticketUrl}
              setTicketUrl={setTicketUrl}
              city={city}
              preferredRegion={
                preferredRegion
              }
              setPreferredRegion={
                setPreferredRegion
              }
              filteredCities={
                filteredCities
              }
              handleCitySearch={
                handleCitySearch
              }
              handleSelectCity={
                handleSelectCity
              }
              date={date}
              setDate={setDate}
              handleSaveEvent={
                handleSaveEvent
              }
              onCancel={
                handleCloseNewEvent
              }
            />
          )}

        {/* EVENTS AREA */}
        <Box
          flex="initial"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          pt={{
            base: 3,
            md: 10,
          }}
          pb={{
            base: 5,
            md: 6,
          }}
        >
          {currentLoading ? (
            <Text color="white">
              Loading...
            </Text>
          ) : currentEvents.length === 0 ? (
            <Text
              color="gray.300"
              fontSize="sm"
              letterSpacing="1px"
              mb={8}
            >
              {isPastTab
                ? "No past events"
                : "No upcoming events"}
            </Text>
          ) : (
            <Box
              w="100%"
              border="none"
              borderRadius="0"
              bg="transparent"
              backdropFilter="none"
              px={0}
              py={0}
            >
              <EventMonthList
                entries={entries}
                activeEditor={
                  isPastTab
                    ? null
                    : activeEditor
                }
                onRequestEdit={
                  handleRequestEdit
                }
                onCancelEdit={
                  handleCancelEdit
                }
                onDirtyChange={
                  setHasActiveEditorChanges
                }
                onDelete={
                  handleDeleteEvent
                }
                onUpdate={
                  handleUpdateEvent
                }
                showButton={!isPastTab}
              />

              {/* LOAD MORE - PAST EVENTS ONLY */}
              {isPastTab &&
                visibleEvents <
                  pastEvents.length && (
                  <Text
                    mt={8}
                    textAlign="center"
                    fontSize="sm"
                    fontWeight="600"
                    letterSpacing="2px"
                    color="gray.300"
                    cursor="pointer"
                    transition="all 0.2s ease"
                    _hover={{
                      color: "white",
                    }}
                    onClick={() =>
                      setVisibleEvents(
                        (prev) =>
                          prev +
                          EVENTS_PER_PAGE
                      )
                    }
                  >
                    Load More
                  </Text>
                )}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
