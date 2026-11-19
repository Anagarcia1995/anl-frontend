
import { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { fetchEvents } from "../../services/eventsService";
import { getUpcomingEvents } from "../../utils/events";

const getEventDateParts = (dateString) => {
  if (!dateString) {
    return { day: "--", month: "---" };
  }

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return { day: "--", month: "---" };
  }

  return {
    day: String(date.getDate()).padStart(2, "0"),
    month: date
      .toLocaleDateString("en-GB", {
        month: "short",
      })
      .toUpperCase(),
  };
};

export default function TourSection() {
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadEvents = async () => {
      try {
        const data = await fetchEvents();

        if (mounted) {
          setEvents(getUpcomingEvents(data).slice(0, 4));
        }
      } catch (error) {
        console.error("Error loading home events", error);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadEvents();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading || !events.length) {
    return null;
  }

  return (
    <Box
      w={{
        base: "100vw",
        lg: "calc(100% + 32px)",
      }}
      maxW="100vw"
      position="relative"
      left={{
        base: "50%",
        lg: "auto",
      }}
      transform={{
        base: "translateX(-50%)",
        lg: "none",
      }}
      ml={{
        base: 0,
        lg: "-16px",
      }}
      bg="black"
      color="white"
      py={{
        base: 8,
        md: 14,
        lg: 16,
      }}
      px={{
        base: 5,
        sm: 7,
        md: 10,
        lg: 16,
      }}
    >
      <Box w="100%" maxW="950px" mx="auto">
        {/* SECTION HEADING */}
        <Flex
          justify="flex-start"
          align="center"
          mb={{
            base: 2,
            md: 7,
          }}
        >
          <Text
            as="button"
            type="button"
            onClick={() => navigate("/next-dates")}
            cursor="pointer"
            fontSize={{
              base: "10px",
              md: "15px",
              lg: "20px",
              xl: "13px",
            }}
            fontWeight="600"
            letterSpacing="2px"
            textTransform="uppercase"
            color="white"
            transition="color 0.2s ease"
            _hover={{
              "@media (hover: hover) and (pointer: fine)": {
                color: "gray.400",
              },
            }}
            _focusVisible={{
              outline: "1px solid white",
              outlineOffset: "5px",
            }}
          >
            NEXT DATES
          </Text>
        </Flex>

        {/* EVENTS LIST */}
        <Flex direction="column" w="100%">
          {events.map((event) => {
            const { day, month } = getEventDateParts(
              event.date
            );

            const ticketUrl =
              event.ticketUrl || event.ticket;

            const cityCountry = event.city
              ? `${event.city}${
                  event.countryCode
                    ? ` (${event.countryCode})`
                    : ""
                }`
              : "";

            const fullDetails = [
              event.eventName,
              event.venueName,
              cityCountry,
            ]
              .filter(Boolean)
              .join(" · ");

            return (
              <Flex
                key={event._id}
                role="group"
                direction="row"
                align="center"
                w="100%"
                gap={{
                  base: 2,
                  md: 5,
                  lg: 7,
                }}
                py={{
                  base: 4,
                  md: 5,
                }}
                borderBottom="1px solid"
                borderColor="rgba(255,255,255,0.22)"
                _hover={{
                  "@media (hover: hover) and (pointer: fine)": {
                    "& .event-hover-text": {
                      fontStyle: ticketUrl
                        ? "italic"
                        : "normal",
                    },
                    "& .ticket-text": {
                      fontStyle: ticketUrl
                        ? "italic"
                        : "normal",
                    },
                  },
                }}
              >
                {/* DATE + EVENT INFORMATION */}
                <Flex
                  as={ticketUrl ? "a" : "div"}
                  href={ticketUrl || undefined}
                  target={ticketUrl ? "_blank" : undefined}
                  rel={
                    ticketUrl
                      ? "noopener noreferrer"
                      : undefined
                  }
                  flex="1"
                  minW={0}
                  align="center"
                  gap={{
                    base: 2,
                    md: 5,
                    lg: 7,
                  }}
                  cursor={ticketUrl ? "pointer" : "default"}
                  textDecoration="none"
                  color="inherit"
                  transition={{
                    base: "none",
                    md: "transform 0.3s ease",
                  }}
                  _hover={{
                    "@media (hover: hover) and (pointer: fine)": {
                      transform: ticketUrl
                        ? "translateX(8px)"
                        : "none",
                      textDecoration: "none",
                    },
                  }}
                  _focusVisible={{
                    outline: ticketUrl
                      ? "1px solid white"
                      : "none",
                    outlineOffset: "4px",
                  }}
                  _motionReduce={{
                    transition: "none",
                    _hover: {
                      transform: "none",
                    },
                  }}
                  aria-label={
                    ticketUrl
                      ? `Comprar entradas para ${fullDetails}`
                      : undefined
                  }
                >
                  {/* DATE */}
                  <Flex
                    direction="column"
                    align="center"
                    justify="center"
                    flexShrink={0}
                    w={{
                      base: "38px",
                      md: "48px",
                      lg: "58px",
                      xl: "54px",
                    }}
                  >
                    <Text
                      className="event-hover-text"
                      fontFamily="'Arial Narrow', 'Roboto Condensed', sans-serif"
                      fontSize={{
                        base: "25px",
                        md: "36px",
                        lg: "45px",
                        xl: "34px",
                      }}
                      fontWeight="400"
                      lineHeight="1"
                      letterSpacing="-1px"
                      color="white"
                    >
                      {day}
                    </Text>

                    <Text
                      className="event-hover-text"
                      mt="3px"
                      fontSize={{
                        base: "9px",
                        md: "15px",
                        lg: "16px",
                        xl: "10px",
                      }}
                      fontWeight="500"
                      letterSpacing="1.5px"
                      color="gray.400"
                    >
                      {month}
                    </Text>
                  </Flex>

                  {/* EVENT INFORMATION */}
                  <Box
                    flex="1"
                    minW={0}
                    title={fullDetails}
                  >
                    {/* MOBILE */}
                    <Box
                      display={{
                        base: "block",
                        md: "none",
                      }}
                      minW={0}
                    >
                      <Text
                        className="event-hover-text"
                        fontSize="14px"
                        fontWeight="600"
                        lineHeight="1.35"
                        color="white"
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                      >
                        {event.eventName}
                      </Text>

                      <Flex
                        mt="5px"
                        w="100%"
                        align="baseline"
                        gap={3}
                        minW={0}
                      >
                        <Box
                          flex="1"
                          minW={0}
                          overflow="hidden"
                          whiteSpace="nowrap"
                          textOverflow="ellipsis"
                          lineHeight="1.35"
                        >
                          {event.venueName && (
                            <Text
                              as="span"
                              className="event-hover-text"
                              fontSize="13px"
                              fontWeight="500"
                              color="gray.200"
                            >
                              {event.venueName}
                            </Text>
                          )}

                          {cityCountry && (
                            <Text
                              as="span"
                              className="event-hover-text"
                              ml={event.venueName ? 2 : 0}
                              fontSize="12px"
                              fontWeight="400"
                              color="gray.500"
                            >
                              {event.venueName ? "· " : ""}
                              {cityCountry}
                            </Text>
                          )}
                        </Box>

                        <Text
                          as="span"
                          className="ticket-text"
                          flexShrink={0}
                          fontSize="10px"
                          fontWeight="600"
                          letterSpacing="1px"
                          textTransform="uppercase"
                          color={
                            ticketUrl
                              ? "white"
                              : "gray.500"
                          }
                          whiteSpace="nowrap"
                        >
                          {ticketUrl ? "TICKETS" : "SOON"}
                        </Text>
                      </Flex>
                    </Box>

                    {/* TABLET + DESKTOP */}
                    <Box
                      display={{
                        base: "none",
                        md: "block",
                      }}
                      overflow="hidden"
                      whiteSpace="nowrap"
                      textOverflow="ellipsis"
                    >
                      {/* EVENT NAME */}
                      <Text
                        as="span"
                        className="event-hover-text"
                        fontSize={{
                          md: "22px",
                          lg: "26px",
                          xl: "18px",
                        }}
                        fontWeight="600"
                        lineHeight="1.4"
                        letterSpacing="0.1px"
                        color="white"
                      >
                        {event.eventName}
                      </Text>

                      {/* VENUE */}
                      {event.venueName && (
                        <Text
                          as="span"
                          className="event-hover-text"
                          ml={3}
                          fontSize={{
                            md: "18px",
                            lg: "22px",
                            xl: "14px",
                          }}
                          fontWeight="500"
                          letterSpacing="0.2px"
                          color="gray.200"
                        >
                          · {event.venueName}
                        </Text>
                      )}

                      {/* CITY + COUNTRY */}
                      {cityCountry && (
                        <Text
                          as="span"
                          className="event-hover-text"
                          ml={3}
                          fontSize={{
                            md: "15px",
                            lg: "20px",
                            xl: "13px",
                          }}
                          fontWeight="400"
                          letterSpacing="0.2px"
                          color="gray.500"
                        >
                          · {cityCountry}
                        </Text>
                      )}
                    </Box>
                  </Box>
                </Flex>

                {/* DESKTOP TICKETS */}
                <Text
                  as={ticketUrl ? "a" : "span"}
                  href={ticketUrl || undefined}
                  target={ticketUrl ? "_blank" : undefined}
                  rel={
                    ticketUrl
                      ? "noopener noreferrer"
                      : undefined
                  }
                  display={{
                    base: "none",
                    md: "inline",
                  }}
                  className="ticket-text"
                  flexShrink={0}
                  color={
                    ticketUrl ? "white" : "gray.500"
                  }
                  fontSize={{
                    base: "10px",
                    md: "14px",
                    lg: "15px",
                    xl: "12px",
                  }}
                  fontWeight="600"
                  letterSpacing={{
                    base: "1px",
                    md: "2px",
                  }}
                  textTransform="uppercase"
                  textDecoration="none"
                  cursor={ticketUrl ? "pointer" : "default"}
                  transition="color 0.2s ease"
                  _hover={{
                    "@media (hover: hover) and (pointer: fine)": {
                      color: "gray.400",
                      textDecoration: "none",
                    },
                  }}
                  _focusVisible={{
                    outline: "1px solid white",
                    outlineOffset: "4px",
                  }}
                >
                  {ticketUrl ? "TICKETS" : "SOON"}
                </Text>
              </Flex>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
}
