import * as React from "react"

import { cn } from "@/lib/utils"
import styles from "@/styles/components/placeholder/category-placeholder.module.scss"

interface CategoryPlaceholderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function CategoryPlaceholder({
  className,
  ...props
}: CategoryPlaceholderProps) {
  return <div className={cn(styles["placeholder"], className)} {...props}></div>
}
