"use client"

import { useTransition } from "react"
import * as React from "react"
import { useRouter } from "next/navigation"
import { UserRepository } from "@modules/user/infrastructure/repository/user.repository"
import { toast } from "sonner"

import { IconSpinner } from "@/components/share-styled/auth-forms/style"
import { CopyButton } from "@/app/(dashboard)/u/[username]/settings/stream/_components/stream-key-card/style"

export const ConnectModalBtn = () => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

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
    <CopyButton disabled={isPending} onClick={onSubmit}>
      {isPending && (
        <IconSpinner
          style={{
            marginLeft: "0.5rem",
            marginRight: "0",
          }}
          aria-hidden="true"
        />
      )}

      Generate
    </CopyButton>
  )
}
