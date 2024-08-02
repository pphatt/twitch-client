"use client"

import * as React from "react"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { Button } from "@/components/ui/button/button"
import { Input, type InputProps } from "@/components/ui/input/input"
import { Icons } from "@/components/icons"
import styles from "@/styles/application/dashboard/settings/stream/_components/stream-key-card.module.scss"

interface StreamKeyCardProps extends InputProps {
  streamKey: string
}

export const StreamKeyCard = React.forwardRef<
  HTMLInputElement,
  StreamKeyCardProps
>(({ className, streamKey, ...props }, ref) => {
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
    <div className={styles["block-content-wrapper"]}>
      <div className={styles["block-content-wrapper"]}>
        <Input
          ref={ref}
          type={showKey ? "text" : "password"}
          $variant={"dashboard"}
          $size={"dashboard"}
          className={cn(styles["content-input"], className)}
          readOnly
          disabled={true}
          value={streamKey}
          {...props}
        />

        <Button
          className={styles["show-button"]}
          onClick={() => setShowKey((prev) => !prev)}
          disabled={props.value === ""}
        >
          {showKey ? (
            <Icons.hide aria-hidden="true" />
          ) : (
            <Icons.view aria-hidden="true" />
          )}
        </Button>
      </div>

      <Button
        className={cn(styles["button"], styles["copy-button"])}
        onClick={() => void handleCopy(streamKey)}
      >
        Copy
      </Button>

      <Button className={cn(styles["button"], styles["default-button"])}>
        Reset
      </Button>
    </div>
  )
})
StreamKeyCard.displayName = "StreamKeyCard"
