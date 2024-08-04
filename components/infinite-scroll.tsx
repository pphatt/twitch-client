import * as React from "react"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface InfiniteScrollProps {
  next: () => void
  children: React.ReactNode
  style?: React.CSSProperties
  height?: number | string
  hasChildren?: boolean
  hasNextPage?: boolean
  isFetchingNextPage?: boolean
  className?: string
  refClassName?: string
}

export default function InfiniteScroll({
  children,
  next,
  hasNextPage,
  isFetchingNextPage,
  className,
}: InfiniteScrollProps) {
  // register DOM observer
  const lastRow = React.useRef<HTMLDivElement>(null)
  const { ref: lastRowRef, entry: lastRowEntry } = useIntersectionObserver({
    root: lastRow.current,
    threshold: 1,
  })

  React.useEffect(() => {
    if (lastRowEntry?.isIntersecting && hasNextPage && !isFetchingNextPage) {
      void next() // ignore return promise value by using void
      return
    }
  }, [lastRowEntry, next, hasNextPage, isFetchingNextPage])

  return (
    <>
      <>{children}</>

      {!isFetchingNextPage && (
        <div
          ref={lastRowRef}
          className={className}
          style={{ order: 4000 }}
        ></div>
      )}
    </>
  )
}
