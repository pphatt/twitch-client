"use client"

import * as React from "react"
import type { ICategoryData } from "@/types"
import { useInfiniteQuery } from "@tanstack/react-query"

import { sleep } from "@/lib/utils"
import { CategoryCard } from "@/components/common/category-card"
import InfiniteScroll from "@/components/infinite-scroll"
import { CategoryCardSkeleton } from "@/components/loading/category-card-skeleton"
import styles from "@/styles/components/category-list.module.scss"

interface CategoryListProps {
  categories: ICategoryData[]
}

export function CategoryList({ categories }: CategoryListProps) {
  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["category-list"],
      queryFn: async ({ pageParam = 1 }) => {
        if (pageParam === 10) {
          return []
        }

        await sleep(1000)
        return categories
      },
      initialData: () => {
        return {
          pages: [categories],
          pageParams: [],
        }
      },
      initialPageParam: 1,
      getNextPageParam: (_, pages) => {
        if (pages.length === 10) {
          return undefined
        }

        return pages.length + 1
      },
      refetchOnWindowFocus: false,
    })

  const categoryData = React.useMemo(() => {
    return data.pages.flatMap((category) => category)
  }, [data])

  if (isLoading) {
    return (
      <>
        {[...(Array(20) as number[])].map((_, index) => (
          <CategoryCardSkeleton
            key={index + categoryData.length}
            style={{ order: index + categoryData.length }}
            className={styles["category-card-skeleton"]}
          />
        ))}
      </>
    )
  }

  return (
    <InfiniteScroll
      next={fetchNextPage}
      isFetchingNextPage={isFetchingNextPage}
      hasNextPage={hasNextPage}
      refClassName={styles["category-placeholder"]}
    >
      {categoryData.map((category, index) => (
        <CategoryCard
          key={index}
          data-index={index}
          category={category}
          className={styles["category-card"]}
          style={{ order: index }}
        />
      ))}

      {isFetchingNextPage &&
        [...(Array(8) as number[])].map((_, index) => (
          <CategoryCardSkeleton
            key={index + categoryData.length}
            style={{ order: index + categoryData.length }}
            className={styles["category-card-skeleton"]}
          />
        ))}
    </InfiniteScroll>
  )
}
