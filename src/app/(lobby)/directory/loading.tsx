import * as React from "react"

import { CategoryCardSkeleton } from "@/components/loading/category-card-skeleton"
import styles from "@/styles/directory/loading.module.scss"

export default function Loading() {
  return (
    <>
      {[...(Array(20) as number[])].map((_, index) => (
        <CategoryCardSkeleton
          key={index}
          style={{ order: index }}
          className={styles["category-card-skeleton"]}
        />
      ))}
    </>
  )
}
