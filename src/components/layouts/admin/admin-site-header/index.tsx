"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { useAuth } from "@/context/auth.context"

import { adminSiteConfig } from "@/config/site"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"
import AdminLogoutButton from "@/components/layouts/admin/admin-logout-button"
import styles from "@/components/layouts/admin/admin-site-header/style.module.scss"
import { DropdownItemLink } from "@/components/layouts/dashboard/dashboard-site-header/style"

export function AdminSiteHeader() {
  const { profile } = useAuth()

  if (!profile) {
    return <></>
  }

  return (
    <header className={styles["site-header-layout-wrapper"]}>
      <div className={styles["site-header-breadcrumb-wrapper"]} />

      <div className={styles["site-header-user-action-wrapper"]}>
        <div className={styles["role-text"]}>Administrator</div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              $variant="ghost"
              className={styles["site-header-user-nav-button"]}
            >
              <Avatar>
                <AvatarImage
                  src={profile.image.url ?? ""}
                  alt={profile.username ?? ""}
                />

                <AvatarFallback>{profile.username[0]}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className={styles["user-nav-dropdown-content-wrapper"]}
            align="end"
            forceMount
          >
            <DropdownMenuLabel
              className={styles["user-nav-dropdown-content-label-wrapper"]}
            >
              <div
                className={styles["user-nav-dropdown-content-label-container"]}
              >
                <p>{profile.username}</p>
                <p>{profile.email}</p>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator className={styles["dropdown-separator"]} />

            <DropdownMenuGroup>
              <DropdownMenuItem className={styles["dropdown-button"]}>
                <DropdownItemLink
                  style={{
                    width: "100%",
                  }}
                  href={"/"}
                >
                  <span>Back to Channel</span>
                  <Icons.home style={{ fill: "none" }} />
                </DropdownItemLink>
              </DropdownMenuItem>

              <DropdownMenuItem className={styles["dropdown-button"]}>
                <DropdownItemLink
                  style={{
                    width: "100%",
                  }}
                  href={"/settings/profile"}
                >
                  <span>Settings</span>
                  <Icons.siteHeaderSettings />
                </DropdownItemLink>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator className={styles["dropdown-separator"]} />

            <AdminLogoutButton />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
