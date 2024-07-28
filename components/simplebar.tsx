// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client"

import * as React from "react"
import type { MutableRefObject, ReactNode } from "react"
import SimpleBarCore from "simplebar/packages/simplebar-core/dist"
import type { SimpleBarOptions } from "simplebar/packages/simplebar-core/dist"

import { cn } from "@/lib/utils"

type RenderFunc = (props: {
  scrollableNodeRef: MutableRefObject<HTMLElement | undefined>
  scrollableNodeProps: {
    className: string
    ref: MutableRefObject<HTMLElement | undefined>
  }
  contentNodeRef: MutableRefObject<HTMLElement | undefined>
  contentNodeProps: {
    className: string
    ref: MutableRefObject<HTMLElement | undefined>
  }
}) => ReactNode

export interface Props
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    SimpleBarOptions {
  children?: ReactNode | RenderFunc
  scrollableNodeProps?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref?: any
    className?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }
  simpleContentWrapperStyle?: React.CSSProperties
}

const SimpleBar = React.forwardRef<SimpleBarCore | null, Props>(
  (
    {
      children,
      className,
      scrollableNodeProps = {},
      simpleContentWrapperStyle,
      ...otherProps
    },
    ref
  ) => {
    const elRef = React.useRef()
    const scrollableNodeRef = React.useRef<HTMLElement>()
    const contentNodeRef = React.useRef<HTMLElement>()
    const options: Partial<SimpleBarOptions> = {}

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rest: { [key: string]: any } = {}

    Object.keys(otherProps).forEach((key) => {
      if (
        Object.prototype.hasOwnProperty.call(SimpleBarCore.defaultOptions, key)
      ) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
        ;(options as any)[key] = otherProps[key as keyof SimpleBarOptions]
      } else {
        rest[key] = otherProps[key as keyof SimpleBarOptions]
      }
    })

    const classNames = {
      ...SimpleBarCore.defaultOptions.classNames,
      ...options.classNames,
    } as Required<(typeof SimpleBarCore.defaultOptions)["classNames"]>

    const scrollableNodeFullProps = {
      ...scrollableNodeProps,
      className: `${classNames.contentWrapper}${
        scrollableNodeProps.className ? ` ${scrollableNodeProps.className}` : ""
      }`,
      tabIndex: options.tabIndex || SimpleBarCore.defaultOptions.tabIndex,
      role: "region",
      "aria-label": options.ariaLabel || SimpleBarCore.defaultOptions.ariaLabel,
    }

    React.useEffect(() => {
      let instance: SimpleBarCore | null

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      scrollableNodeRef.current = scrollableNodeFullProps.ref
        ? // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          scrollableNodeFullProps.ref.current
        : scrollableNodeRef.current

      if (elRef.current) {
        instance = new SimpleBarCore(elRef.current, {
          ...options,
          ...(scrollableNodeRef.current && {
            scrollableNode: scrollableNodeRef.current,
          }),
          ...(contentNodeRef.current && {
            contentNode: contentNodeRef.current,
          }),
        })

        if (ref) {
          ref.current = instance
        }
      }

      return () => {
        instance?.unMount()
        instance = null
        if (typeof ref === "function") {
          ref(null)
        }
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
      <div
        data-simplebar="init"
        ref={elRef}
        {...rest}
        className={cn("scrollable-area", className)}
      >
        <div className={`${classNames.track} horizontal`}>
          <div className={classNames.scrollbar} />
        </div>

        <div className={`${classNames.track} vertical`}>
          <div className={classNames.scrollbar} />
        </div>

        <div
          className={`${classNames.wrapper}`}
          style={{
            paddingRight: "17px",
            marginBottom: "-34px",
          }}
        >
          <div className={classNames.heightAutoObserverWrapperEl}>
            <div className={classNames.heightAutoObserverEl} />
          </div>

          <div
            {...scrollableNodeFullProps}
            style={
              simpleContentWrapperStyle
                ? simpleContentWrapperStyle
                : {
                    paddingBottom: "17px",
                    marginRight: "-17px",
                  }
            }
          >
            <div className={`${classNames.contentEl} root-scrollable__wrapper`}>
              {typeof children === "function" ? (
                children({
                  scrollableNodeRef,
                  scrollableNodeProps: {
                    ...scrollableNodeFullProps,
                    ref: scrollableNodeRef,
                  },
                  contentNodeRef,
                  contentNodeProps: {
                    className: classNames.contentEl,
                    ref: contentNodeRef,
                  },
                })
              ) : (
                <>{children}</>
              )}
            </div>
          </div>

          <div className={classNames.placeholder} />
        </div>
      </div>
    )
  }
)

SimpleBar.displayName = "SimpleBar"

export default SimpleBar
