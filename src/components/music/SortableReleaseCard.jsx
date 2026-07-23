import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

import ReleaseCard from "./ReleaseCard"

export default function SortableReleaseCard({
  release,
  ...props
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id: release._id,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
    >
      <ReleaseCard
        release={release}
        dragHandle={{
          ...attributes,
          ...listeners,
        }}
        {...props}
      />
    </div>
  )
}