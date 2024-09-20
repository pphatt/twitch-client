import React from "react"

import { useLocalStorage } from "@/hooks/useLocalStorage"

const KEY = "video-muted"

export function useMute() {
  const [isVideoMuted, setIsVideoMuted] = useLocalStorage<{
    default: boolean
  } | null>({
    key: KEY,
  })

  React.useEffect(() => {
    const localStorageValue = window["localStorage"].getItem(KEY)

    let parsedValue: { default: boolean } = { default: false }

    if (
      localStorageValue &&
      localStorageValue !== "null" &&
      localStorageValue !== "undefined"
    ) {
      parsedValue = JSON.parse(localStorageValue) as { default: boolean }
    }

    setIsVideoMuted(parsedValue)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { isVideoMuted, setIsVideoMuted }
}
