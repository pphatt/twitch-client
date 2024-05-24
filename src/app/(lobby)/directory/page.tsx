import * as React from "react"

import { categoryData } from "@/config/data"
import { CategoryCard } from "@/components/common/category-card"
import { CategoryCardSkeleton } from "@/components/loading/category-card-skeleton"
import { CategoryPlaceholder } from "@/components/placeholder/category-placeholder"
import styles from "@/styles/directory/page.module.scss"

export default async function DirectoryPage() {
  const categories = categoryData.categories

  await new Promise((resolve) => setTimeout(resolve, 1000));

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
        <CategoryPlaceholder key={index} style={{ order: 4000 }} />
      ))}
    </>
  )
}
