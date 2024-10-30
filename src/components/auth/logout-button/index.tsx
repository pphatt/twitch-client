"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { queryClientProvider } from "@/providers/query-client.provider"
import { UserRepository } from "@modules/user/infrastructure/repository/user.repository"
import { toast } from "sonner"

import { DropdownItemButton } from "@/components/auth/logout-button/style"
import { Icons } from "@/components/icons"

export default function LogoutButton() {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

  const handleLogout = () => {
    startTransition(async () => {
      await UserRepository.logout()

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
