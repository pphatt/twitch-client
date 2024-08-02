"use client"

import * as React from "react"
import { toast } from "sonner"

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { Button } from "@/components/ui/button/button"
import { Input } from "@/components/ui/input/input"
import { Icons } from "@/components/icons"
import styles from "@/styles/application/dashboard/settings/stream/_components/stream-url-card.module.scss"

interface StreamUrlCardProps {
  url: string
}

export default function StreamUrlCard({ url }: StreamUrlCardProps) {
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
      <Input
        type="text"
        $variant={"dashboard"}
        $size={"dashboard"}
        className={styles["content-input"]}
        readOnly
        disabled={true}
        value={url}
      />

      <Button
        className={styles["copy-button"]}
        onClick={() => void handleCopy(url)}
      >
        <Icons.copy />
      </Button>
    </div>
  )
}
