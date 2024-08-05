"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { PlaceHolder } from "@/components/placeholder/category-placeholder/style"
import styles from "@/styles/components/placeholder/category-placeholder.module.scss"

interface CategoryPlaceholderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function CategoryPlaceholder({ ...props }: CategoryPlaceholderProps) {
  return <PlaceHolder {...props} />
}
