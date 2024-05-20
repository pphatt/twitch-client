import * as React from "react"
import Link from "next/link"
import type { ICategoryData } from "@/types"

import { Separator } from "@/components/ui/separator"
import { CategoryCard } from "@/components/common/category-card"
import styles from "@/styles/components/category-section.module.scss"

export function CategorySection({
  categories,
}: {
  categories: ICategoryData[]
}) {
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
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>

        <Separator />
      </div>
    </div>
  )
}
