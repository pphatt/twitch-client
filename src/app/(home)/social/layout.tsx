import * as React from "react"

import styles from "@/styles/application/home/layout.module.scss"

import "@/styles/vendors/social.scss"

interface HomeLayoutProps {
  children: React.ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return <div className={styles["layout"]}>{children}</div>
}
