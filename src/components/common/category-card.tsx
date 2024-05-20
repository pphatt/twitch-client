import * as React from "react"
import Link from "next/link"
import type { ICategoryData } from "@/types"

import { formatViewCount } from "@/lib/utils"
import { Tag } from "@/components/common/tag"
import styles from "@/styles/components/common/category-card.module.scss"

export function CategoryCard({ category }: { category: ICategoryData }) {
  const { title, image, currentTotalView, slug, tags } = category

  return (
    <div className={styles["card-wrapper"]}>
      <div className={styles["card-container"]}>
        <div className={styles["card"]}>
          <div className={styles["card-info"]}>
            <Link
              href={`/directory/category/${slug}`}
              className={styles["card-image-wrapper"]}
            >
              <div className={styles["top-left-corner"]}></div>
              <div className={styles["bottom-right-corner"]}></div>
              <div className={styles["left-bar"]}></div>
              <div className={styles["bottom-bar"]}></div>
              <div className={styles["card-image-container"]}>
                <img src={image} alt={title} className={styles["card-image"]} />
              </div>
            </Link>

            <div className={styles["card-body"]}>
              <div className={styles["category-title"]}>
                <Link href={`/directory/category/${slug}`}>
                  <h2>{title}</h2>
                </Link>
              </div>
              <div className={styles["category-current-total-view"]}>
                <Link href={`/directory/category/${slug}`}>
                  {formatViewCount(currentTotalView)}
                  Viewers
                </Link>
              </div>
            </div>
          </div>

          <Tag tags={tags} />
        </div>
      </div>
    </div>
  )
}
