"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { UserRepository } from "@modules/user/infrastructure/repository/user.repository"
import { IngressInput } from "livekit-server-sdk"
import { AlertTriangle } from "lucide-react"
import { toast } from "sonner"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const RTMP = String(IngressInput.RTMP_INPUT)

export const ConnectModal = () => {
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
    <Dialog>
      <DialogTrigger asChild>
        <Button>Generate connection</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Generate connection</DialogTitle>
        </DialogHeader>
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Warning!</AlertTitle>
          <AlertDescription>
            This action will reset all active streams using the current
            connection
          </AlertDescription>
        </Alert>
        <div className="flex justify-between">
          <Button disabled={isPending} onClick={onSubmit}>
            Generate
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
