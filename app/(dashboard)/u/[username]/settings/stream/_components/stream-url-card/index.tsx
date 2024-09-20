"use client"

import * as React from "react"
import { toast } from "sonner"

import { useCopyToClipboard } from "@/hooks/useCopyToClipboard"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import {
  BlockContentWrapper,
  CopyButton,
} from "@/app/(dashboard)/u/[username]/settings/stream/_components/stream-url-card/style"
import styles from "@/app/(dashboard)/u/[username]/settings/stream/_components/stream-url-card/style.module.scss"

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
    <BlockContentWrapper>
      <Input
        type="text"
        $variant={"dashboard"}
        $size={"dashboard"}
        className={styles["content-input"]}
        readOnly
        disabled={true}
        value={url}
      />

      <CopyButton onClick={() => void handleCopy(url)}>
        <Icons.copy />
      </CopyButton>
    </BlockContentWrapper>
  )
}
