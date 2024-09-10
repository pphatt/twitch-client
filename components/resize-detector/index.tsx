import * as React from "react"

import "@/components/resize-detector/style.module.scss"

interface ResizeDetectorProps {
  /*
   * resizeRef for pointing to the element need to observe when resize
   * */
  resizeRef: React.MutableRefObject<HTMLDivElement | null>

  /*
   * setState for sharing the value across the app
   * */
  setState: (value: number) => void

  /*
   * isInitNeeded for initialized value
   * */
  isInitNeeded?: boolean
}

export default function ResizeDetector({
  resizeRef,
  setState,
  isInitNeeded = false,
}: ResizeDetectorProps) {
  // for the innit height
  React.useEffect(() => {
    if (!isInitNeeded) {
      return
    }

    if (!resizeRef.current) {
      return
    }

    setState(resizeRef.current.clientHeight)
  }, [setState, resizeRef])

  // binding for resize window effect video dimension
  React.useEffect(() => {
    const handleVideoHeightChange = () => {
      if (!resizeRef.current) {
        return
      }

      setState(resizeRef.current.clientHeight)
    }

    window.addEventListener("resize", handleVideoHeightChange)
    return () => window.removeEventListener("resize", handleVideoHeightChange)
  }, [setState, resizeRef])

  return (
    <div className="resize-detector">
      <div className="resize-detector">
        <div
          className="resize-detector__grow"
          style={{
            width: "100000px",
            height: "100000px",
          }}
        ></div>
      </div>
      <div className="resize-detector">
        <div className="resize-detector__shrink"></div>
      </div>
    </div>
  )
}
