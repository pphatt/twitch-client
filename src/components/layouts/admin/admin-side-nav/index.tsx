"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import AnimatedLogo from "@/assets/logo/animated-logo"
import { cn } from "@/utils/common"
import { ChevronLeftIcon } from "lucide-react"

import { adminSiteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import styles from "@/components/layouts/admin/admin-side-nav/style.module.scss"

export function AdminMainNav() {
  const pathname = usePathname()

  const items = adminSiteConfig.mainNav

  if (!items?.length) return null

  return (
    <div className={styles["admin-main-nav-wrapper"]}>
      <div className={styles["admin-main-nav-container"]}>
        <div className={styles["admin-side-nav-header-wrapper"]}>
          <Link
            href={"/staff/admin"}
            className={styles["admin-side-nav-header-container"]}
          >
            <div className={styles["admin-side-nav-header-icon-wrapper"]}>
              <AnimatedLogo />
            </div>

            <div className={styles["admin-side-nav-header-text-wrapper"]}>
              <span>Twitch</span>
              <span>Dashboard</span>
            </div>
          </Link>
        </div>

        <div className={styles["admin-side-nav-content-wrapper"]}>
          <div className={styles["admin-side-nav-content-container"]}>
            <div className={styles["admin-side-nav-content-header-text"]}>
              Overview
            </div>

            <ul className={styles["admin-side-nav-content-ul"]}>
              {items.map((item, index) => {
                let isActive = (item.slug ?? "").split("?")[0] === pathname

                if (pathname.includes("details")) {
                  isActive = (item.slug ?? "").split("?")[0] === pathname.split("/details")[0]
                }

                const Icon = item.icon ? Icons[item.icon] : ChevronLeftIcon

                return item.slug ? (
                  <li key={index}>
                    <Link
                      className={cn(
                        styles["admin-side-nav-content-li-wrapper"],
                        isActive &&
                          styles["admin-side-nav-content-li-wrapper-active"]
                      )}
                      aria-label={item.title}
                      key={index}
                      href={item.slug}
                      target={item.external ? "_blank" : ""}
                      rel={item.external ? "noreferrer" : ""}
                    >
                      <Icon aria-hidden="true" />
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ) : (
                  <span
                    key={index}
                    className={styles["sidebar-nav-item-disabled"]}
                  >
                    {item.title}
                  </span>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
