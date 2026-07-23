import ReleaseCard from "./ReleaseCard"

export default function SortableReleaseCard({
  release,
  ...props
}) {
  return (
    <ReleaseCard
      release={release}
      {...props}
    />
  )
}