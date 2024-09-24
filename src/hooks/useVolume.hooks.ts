import React from "react"

import { useLocalStorage } from "@/hooks/useLocalStorage.hooks"

const KEY = "volume"

export function useVolume() {
  const [volume, setVolume] = useLocalStorage<number>({
    key: KEY,
  })

  React.useEffect(() => {
    const localStorageValue = window["localStorage"].getItem(KEY)

    let parsedValue: number = 1

    if (
      localStorageValue &&
      localStorageValue !== "null" &&
      localStorageValue !== "undefined"
    ) {
      parsedValue = JSON.parse(localStorageValue) as number
    }

    setVolume(parsedValue)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { volume, setVolume }
}
