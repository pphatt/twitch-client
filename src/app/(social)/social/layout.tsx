import * as React from "react"

import styles from "@/styles/application/social/layout.module.scss"

import "@/styles/vendors/social.scss"
import "@/styles/vendors/file-pond.scss"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

import HomeSiteHeader from "@/components/layouts/social/site-header"

interface HomeLayoutProps {
  children: React.ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  const accessToken = cookies().get("access-token")?.value

  if (!accessToken) {
    redirect("/")
  }

  return (
    <div className={styles["layout"]}>
      <HomeSiteHeader accessToken={accessToken} />

      <>{children}</>
    </div>
  )
}
