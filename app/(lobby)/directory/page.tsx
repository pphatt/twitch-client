import * as React from "react"

import { categoryData } from "@/config/data"
import { sleep } from "@/lib/utils"
import { CategoryList } from "@/components/common/category-list/category-list"
import { CategoryPlaceholder } from "@/components/placeholder/category-placeholder/category-placeholder"

export default async function DirectoryPage() {
  const categories = categoryData.categories

  await sleep(1000)

  return (
    <>
      <CategoryList categories={categories} />

      {[...(Array(20) as number[])].map((_, index) => (
        <CategoryPlaceholder key={index} style={{ order: 4000 }} />
      ))}
    </>
  )
}
