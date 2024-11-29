"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { Icons } from "@/components/icons"
import { LikeButton } from "@/components/layouts/social/components/like-btn/style"

interface LikeBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  likeCount: number
  initialLike: boolean
}

export function LikeBtn({
  likeCount,
  initialLike,
  children,
  ...props
}: LikeBtnProps) {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

  const onSubmit = () => {
    startTransition(async () => {
      try {
      } catch (e) {
        toast.error("Something went wrong. Try again!")
      }
    })
  }

  return (
    <LikeButton
      {...props}
      $initialLike={initialLike}
      onClick={onSubmit}
      disabled={isPending}
    >
      <Icons.heart />
      {children ?? <span>{likeCount}</span>}
    </LikeButton>
  )
}
