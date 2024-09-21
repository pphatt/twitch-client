import * as React from "react"

interface SideNavBarSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export default function SideNavBarSkeleton({
  ...props
}: SideNavBarSkeletonProps) {
  return <SideNavBarSkeleton {...props} />
}
