"use client"

import * as React from "react"

import { PlaceHolder } from "@/components/placeholder/category-placeholder/style"

interface CategoryPlaceholderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function CategoryPlaceholder({ ...props }: CategoryPlaceholderProps) {
  return <PlaceHolder {...props} />
}
