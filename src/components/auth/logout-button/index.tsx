"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/auth.context"
import { queryClientProvider } from "@/providers/query-client.provider"
import { toast } from "sonner"

import { DropdownItemButton } from "@/components/auth/logout-button/style"
import { Icons } from "@/components/icons"

import { UserRepository } from "../../../../modules/user/infrastructure/repository/user.repository"

export default function LogoutButton() {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

  const { setProfile, setIsAuthenticated } = useAuth()

  const handleLogout = () => {
    startTransition(async () => {
      await UserRepository.logout()

      setProfile(null)
      setIsAuthenticated(false)

      queryClientProvider.clear()

      toast.success("Logout successfully!")

      router.refresh()
    })
  }

  return (
    <DropdownItemButton disabled={isPending} onClick={handleLogout}>
      <span>Log Out</span>
      <Icons.logout />
    </DropdownItemButton>
  )
}
