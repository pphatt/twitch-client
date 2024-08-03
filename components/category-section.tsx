"use client"

import * as React from "react"
import Link from "next/link"
import type { ICategoryData } from "@/types"

import { useMediaQuery } from "@/hooks/use-media-query"
import { Separator } from "@/components/ui/separator/separator"
import { CategoryCard } from "@/components/common/category-card/category-card"
import styles from "@/styles/components/category-section.module.scss"

interface CategorySectionProps {
  categories: ICategoryData[]
}

export default function CategorySection({ categories }: CategorySectionProps) {
  const isScreenWidthAbove2073 = useMediaQuery("(min-width: 2073px)")
  const isScreenWidthAbove1773 = useMediaQuery("(min-width: 1773px)")
  const isScreenWidthAbove1473 = useMediaQuery("(min-width: 1473px)")
  const isScreenWidthAbove983 = useMediaQuery("(min-width: 983px)")

  const getNumberByScreenWidth = React.useMemo(() => {
    if (isScreenWidthAbove2073) {
      return 12
    } else if (isScreenWidthAbove1773) {
      return 10
    } else if (isScreenWidthAbove1473) {
      return 8
    } else if (isScreenWidthAbove983) {
      return 6
    }

    return 4
  }, [
    isScreenWidthAbove1473,
    isScreenWidthAbove1773,
    isScreenWidthAbove2073,
    isScreenWidthAbove983,
  ])

  return (
    <div className={styles["content-section"]}>
      <div className={styles["content-section-header"]}>
        <h2 className={styles["content-section-header-text"]}>
          <Link href={"/directory"}>Categories</Link>
          <span> we think you’ll like</span>
        </h2>
      </div>

      <div className={styles["content-list-wrapper"]}>
        <div className={styles["content-list-container"]}>
          {categories
            .slice(0, getNumberByScreenWidth)
            .map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
        </div>

        <Separator />
      </div>
    </div>
  )
}
