import * as React from "react"

import { CategoryCardSkeleton } from "@/components/loading/lobby/category-card-skeleton"
import { CategoryPlaceholder } from "@/components/placeholder/category-placeholder"
import styles from "@/styles/application/directory/loading.module.scss"

export default function CategoriesLoading() {
  return (
    <>
      {[...(Array(20) as number[])].map((_, index) => (
        <CategoryCardSkeleton
          key={index}
          style={{ order: index }}
          className={styles["category-card-skeleton"]}
        />
      ))}

      {[...(Array(20) as number[])].map((_, index) => (
        <CategoryPlaceholder key={index} style={{ order: 4000 }} />
      ))}
    </>
  )
}
