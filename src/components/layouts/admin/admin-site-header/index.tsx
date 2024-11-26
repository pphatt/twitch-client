"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { useAuth } from "@/context/auth.context"

import { adminSiteConfig } from "@/config/site"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/bread-crumb"
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
  const pathname = usePathname() // Get the current path
  const items = adminSiteConfig.mainNav // Main navigation configuration

  const generateBreadcrumb = React.useMemo(() => {
    // Split pathname into segments and exclude "staff" and "admin"
    const pathSegments = pathname
      .split("/")
      .filter(
        (segment) =>
          segment !== "staff" && segment !== "admin" && segment !== ""
      )

    if (pathname === "/staff/admin") {
      return [{ title: "Overview", href: "" }]
    }

    // Loop through the segments and build the breadcrumb
    const breadcrumb = pathSegments.reduce<{ title: string; href: string }[]>(
      (acc, segment, index) => {
        const currentPath = `/${pathSegments.slice(0, index + 1).join("/")}`

        // Match the segment with mainNav to find the corresponding title
        const matchedItem = items.find((item) =>
          (item.slug ?? "").startsWith(currentPath)
        )

        if (matchedItem) {
          // Only add matched item title and slug
          acc.push({ title: matchedItem.title, href: matchedItem.slug! })
        } else {
          // Add capitalized segments for unmatched paths
          acc.push({
            title: segment.charAt(0).toUpperCase() + segment.slice(1),
            href: currentPath,
          })
        }

        return acc
      },
      []
    )

    return breadcrumb
  }, [items, pathname])

  if (!profile) {
    return <></>
  }

  return (
    <header className={styles["site-header-layout-wrapper"]}>
      <div className={styles["site-header-breadcrumb-wrapper"]} />

      <div className={styles["site-header-user-action-wrapper"]}>
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
