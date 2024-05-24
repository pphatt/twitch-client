import * as React from "react"

import { categoryData } from "@/config/data"
import { CategoryList } from "@/components/category-list"
import { CategoryPlaceholder } from "@/components/placeholder/category-placeholder"

export default async function DirectoryPage() {
  const categories = categoryData.categories

  await new Promise((resolve) => setTimeout(resolve, 500))

  return (
    <>
      <CategoryList categories={categories} />

      {[...(Array(20) as number[])].map((_, index) => (
        <CategoryPlaceholder key={index} style={{ order: 4000 }} />
      ))}
    </>
  )
}
