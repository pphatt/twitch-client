"use client"

import * as React from "react"
import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/utils/common"
import { UserRepository } from "@modules/user/infrastructure/repository/user.repository"
import { toast } from "sonner"

import { useCopyToClipboard } from "@/hooks/useCopyToClipboard.hooks"
import { Input, type InputProps } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import { IconSpinner } from "@/components/share-styled/auth-forms/style"
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
    const router = useRouter()
    const [isPending, startTransition] = useTransition()

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

    const onSubmit = () => {
      startTransition(async () => {
        try {
          await UserRepository.setStreamKey()

          router.refresh()

          toast.success("Ingress created")
        } catch (err) {
          toast.error("Something went wrong")
        }
      })
    }

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
            value={
              streamKey !== "" ? streamKey : "streamkeygoesherewhengenerate"
            }
            {...props}
          />

          {streamKey !== "" && (
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
          )}
        </BlockContentWrapper>

        {streamKey !== "" ? (
          <>
            <CopyButton
              disabled={isPending}
              onClick={() => void handleCopy(streamKey)}
            >
              {isPending && <IconSpinner aria-hidden="true" />}
              Copy
            </CopyButton>

            <DefaultButton disabled={isPending} onClick={onSubmit}>
              {isPending && <IconSpinner aria-hidden="true" />}
              Reset
            </DefaultButton>
          </>
        ) : (
          <CopyButton disabled={isPending} onClick={onSubmit}>
            {isPending && <IconSpinner aria-hidden="true" />}
            Generate
          </CopyButton>
        )}
      </BlockContentWrapper>
    )
  }
)
StreamKeyCard.displayName = "StreamKeyCard"
