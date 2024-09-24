"use client"

import * as React from "react"
import { cn } from "@/utils/common"
import { toast } from "sonner"

import { useCopyToClipboard } from "@/hooks/useCopyToClipboard.hooks"
import { Input, type InputProps } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import {
  BlockContentWrapper,
  CopyButton,
  DefaultButton,
  ShowButton,
} from "@/app/(dashboard)/u/[username]/settings/stream/_components/stream-key-card/style"
import styles from "@/app/(dashboard)/u/[username]/settings/stream/_components/stream-key-card/style.module.scss"

interface StreamKeyCardProps extends InputProps {
  streamKey: string
}

export const StreamKeyCard = React.forwardRef<
  HTMLInputElement,
  StreamKeyCardProps
>(
  (
    {
      className,
      streamKey,
      $variant = "dashboard",
      $size = "dashboard",
      ...props
    },
    ref
  ) => {
    const [showKey, setShowKey] = React.useState(false)

    const [copiedText, copy] = useCopyToClipboard()

    const handleCopy = React.useCallback(
      async (text: string) => {
        await copy(text)
        console.log(copiedText)
        toast.success("Copied to clipboard!")
      },
      [copy]
    )

    return (
      <BlockContentWrapper>
        <BlockContentWrapper>
          <Input
            ref={ref}
            type={showKey ? "text" : "password"}
            $variant={$variant}
            $size={$size}
            className={cn(styles["input"], className)}
            readOnly
            disabled={true}
            value={streamKey}
            {...props}
          />

          <ShowButton
            onClick={() => setShowKey((prev) => !prev)}
            disabled={props.value === ""}
          >
            {showKey ? (
              <Icons.hide aria-hidden="true" />
            ) : (
              <Icons.view aria-hidden="true" />
            )}
          </ShowButton>
        </BlockContentWrapper>

        <CopyButton onClick={() => void handleCopy(streamKey)}>Copy</CopyButton>

        <DefaultButton>Reset</DefaultButton>
      </BlockContentWrapper>
    )
  }
)
StreamKeyCard.displayName = "StreamKeyCard"
