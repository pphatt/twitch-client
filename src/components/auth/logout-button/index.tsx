"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/auth.context"
import { queryClientProvider } from "@/providers/query-client.provider"
import { axiosHttpErrorHandler } from "@/utils/common"
import { UserRepository } from "@modules/user/infrastructure/repository/user.repository"
import { toast } from "sonner"

import { DropdownItemButton } from "@/components/auth/logout-button/style"
import { Icons } from "@/components/icons"

export default function LogoutButton() {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

  const { setProfile, setAuthenticated } = useAuth((state) => state)

  const handleLogout = () => {
    startTransition(async () => {
      try {
        await UserRepository.logout()

        queryClientProvider.clear()

        setProfile(null)
        setAuthenticated(false)

        toast.success("Logout successfully!")

        router.refresh()

        window.location.replace("/")
      } catch (err) {
        const error = axiosHttpErrorHandler(err)

        toast.error(error.message, {
          duration: 10000,
          position: "top-right",
        })

        console.log(error)
      }
    })
  }

  return (
    <DropdownItemButton disabled={isPending} onClick={handleLogout}>
      <span>Log Out</span>
      <Icons.logout />
    </DropdownItemButton>
  )
}
