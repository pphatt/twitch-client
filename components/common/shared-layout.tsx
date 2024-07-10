import * as React from "react"

import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import styles from "@/styles/components/common/shared-layout.module.scss"

interface SharedLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function SharedLayout({
  children,
  className,
  ...props
}: SharedLayoutProps) {
  return (
    <main className={cn(styles["page-wrapper"], className)} {...props}>
      <ScrollArea
        className={styles["page-container"]}
        viewportClassName={styles["content-wrapper"]}
      >
        {children}
      </ScrollArea>
    </main>
  )
}
