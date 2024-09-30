import * as React from "react"

export default function ServerError({
  children,
}: {
  children: React.ReactNode
  error: unknown
}) {
  return <>{children}</>
}
