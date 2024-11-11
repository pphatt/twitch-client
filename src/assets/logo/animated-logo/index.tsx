"use client"

import * as React from "react"
import { GroupAnimated } from "@/assets/logo/animated-logo/style"
import styles from "@/assets/logo/animated-logo/style.module.scss"
import { cn } from "@/utils/common"

export default function AnimatedLogo() {
  const [hover, setHover] = React.useState(false)

  // background
  const polygonAnimateRef1Start = React.useRef<SVGAnimateElement>(null)
  const transformAnimateRef1Start =
    React.useRef<SVGAnimateTransformElement>(null)

  // face
  const polygonAnimateRef1End = React.useRef<SVGAnimateElement>(null)
  const transformAnimateRef1End = React.useRef<SVGAnimateTransformElement>(null)

  // eye
  const transformAnimateRef2Start =
    React.useRef<SVGAnimateTransformElement>(null)
  const transformAnimateRef2End = React.useRef<SVGAnimateTransformElement>(null)

  const handleOnHover = () => {
    setHover(true)

    polygonAnimateRef1Start.current?.beginElement()

    transformAnimateRef1Start.current?.beginElement()

    transformAnimateRef2Start.current?.beginElement()
  }

  const handleOnHoverExit = () => {
    setHover(false)

    polygonAnimateRef1End.current?.beginElement()

    transformAnimateRef1End.current?.beginElement()

    transformAnimateRef2End.current?.beginElement()
  }

  return (
    <div
      className={cn(styles["icon-container"], "tw-animated-glitch-logo")}
      onMouseEnter={handleOnHover}
      onMouseLeave={handleOnHoverExit}
    >
      <figure className={styles["icon-figure"]}>
        <svg
          overflow="visible"
          width="40px"
          height="40px"
          version="1.1"
          viewBox="0 0 40 40"
          x="0px"
          y="0px"
          className={styles["svg-wrapper"]}
        >
          <g>
            <polygon
              points="13 8 8 13 8 31 14 31 14 36 19 31 23 31 32 22 32 8"
              className={styles["polygon-orange"]}
            >
              <animate
                ref={polygonAnimateRef1Start}
                dur="150ms"
                begin="indefinite"
                fill="freeze"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.25 0.1 0.25 1"
                attributeName="points"
                from="13 8 8 13 8 31 14 31 14 36 19 31 23 31 32 22 32 8"
                to="16 5 8 13 8 31 14 31 14 36 19 31 23 31 35 19 35 5"
              />

              <animate
                ref={polygonAnimateRef1End}
                dur="250ms"
                begin="indefinite"
                fill="freeze"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.25 0.1 0.25 1"
                attributeName="points"
                to="13 8 8 13 8 31 14 31 14 36 19 31 23 31 32 22 32 8"
                from="16 5 8 13 8 31 14 31 14 36 19 31 23 31 35 19 35 5"
              />
            </polygon>

            <polygon
              points="26 25 30 21 30 10 14 10 14 25 18 25 18 29 22 25"
              className={styles["polygon-white"]}
            >
              <animateTransform
                ref={transformAnimateRef1Start}
                dur="150ms"
                begin="indefinite"
                fill="freeze"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.25 0.1 0.25 1"
                attributeName="transform"
                type="translate"
                from="0 0"
                to="3 -3"
              />

              <animateTransform
                ref={transformAnimateRef1End}
                dur="250ms"
                begin="indefinite"
                fill="freeze"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.25 0.1 0.25 1"
                attributeName="transform"
                type="translate"
                from="3 -3"
                to="0 0"
              />
            </polygon>

            <GroupAnimated $onHover={hover}>
              <path
                d="M20,14 L22,14 L22,20 L20,20 L20,14 Z M27,14 L27,20 L25,20 L25,14 L27,14 Z"
                className={styles["path-orange"]}
              >
                <animateTransform
                  ref={transformAnimateRef2Start}
                  dur="150ms"
                  begin="indefinite"
                  fill="freeze"
                  calcMode="spline"
                  keyTimes="0; 1"
                  keySplines="0.25 0.1 0.25 1"
                  attributeName="transform"
                  type="translate"
                  from="0 0"
                  to="3 -3"
                ></animateTransform>

                <animateTransform
                  ref={transformAnimateRef2End}
                  dur="250ms"
                  begin="indefinite"
                  fill="freeze"
                  calcMode="spline"
                  keyTimes="0; 1"
                  keySplines="0.25 0.1 0.25 1"
                  attributeName="transform"
                  type="translate"
                  from="3 -3"
                  to="0 0"
                ></animateTransform>
              </path>
            </GroupAnimated>
          </g>
        </svg>
      </figure>
    </div>
  )
}
