import { useEffect, useMemo, useRef } from "react"
import debounce from "lodash.debounce"

import { useUnmountHooks } from "@/hooks/useUnmount.hooks"

type DebounceOptions = {
  leading?: boolean
  trailing?: boolean
  maxWait?: number
}

type ControlFunctions = {
  cancel: () => void
  flush: () => void
  isPending: () => boolean
}

/* eslint-disable  @typescript-eslint/no-explicit-any */
export type DebouncedState<T extends (...args: any) => ReturnType<T>> = ((
  ...args: Parameters<T>
) => ReturnType<T> | undefined) &
  ControlFunctions

/* eslint-disable  @typescript-eslint/no-explicit-any */
export function useDebounceCallbackHooks<
  T extends (...args: any) => ReturnType<T>,
>(func: T, delay = 500, options?: DebounceOptions): DebouncedState<T> {
  const debouncedFunc = useRef<ReturnType<typeof debounce>>()

  useUnmountHooks(() => {
    if (debouncedFunc.current) {
      debouncedFunc.current.cancel()
    }
  })

  const debounced = useMemo(() => {
    const debouncedFuncInstance = debounce(func, delay, options)

    const wrappedFunc: DebouncedState<T> = (...args: Parameters<T>) => {
      return debouncedFuncInstance(...args)
    }

    wrappedFunc.cancel = () => {
      debouncedFuncInstance.cancel()
    }

    wrappedFunc.isPending = () => {
      return !!debouncedFunc.current
    }

    wrappedFunc.flush = () => {
      return debouncedFuncInstance.flush()
    }

    return wrappedFunc
  }, [func, delay, options])

  // Update the debounced function ref whenever func, wait, or options change
  useEffect(() => {
    debouncedFunc.current = debounce(func, delay, options)
  }, [func, delay, options])

  return debounced
}