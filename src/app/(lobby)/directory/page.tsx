import * as React from "react"

import { categoryData } from "@/config/data"
import { CategoryCard } from "@/components/common/category-card"
import { CategoryCardSkeleton } from "@/components/loading/category-card-skeleton"
import styles from "@/styles/directory/page.module.scss"

export default function DirectoryPage() {
  const categories = categoryData.categories

  return (
    <>
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          category={category}
          className={styles["category-card"]}
          style={{ order: index }}
        />
      ))}

      {[...(Array(0) as number[])].map((_, index) => (
        <CategoryCardSkeleton
          key={index + categories.length}
          style={{ order: index + categories.length }}
          className={styles["category-card-skeleton"]}
        />
      ))}

      {[...(Array(20) as number[])].map((_, index) => (
        <div
          key={index}
          style={{ order: 4000 }}
          className={styles["skeleton-placeholder"]}></div>
      ))}
    </>
  )
}
