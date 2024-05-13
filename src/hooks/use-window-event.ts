import * as React from "react"

// use-window-event adds event listener to window object on component mount and removes it on unmount:
export default function useWindowEvent<K extends keyof WindowEventMap>(
  type: K,
  listener: K extends keyof WindowEventMap
    ? (this: Window, ev: WindowEventMap[K]) => void
    : (this: Window, ev: CustomEvent) => void,
  options?: boolean | AddEventListenerOptions
): void {
  React.useEffect(() => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    window.addEventListener(type as any, listener, options)

    /* eslint-disable  @typescript-eslint/no-explicit-any */
    return () => window.removeEventListener(type as any, listener, options)
  }, [type, listener])
}
