"use client"

import * as React from "react"
import type { ICategoryData } from "@/types"
import { useInfiniteQuery } from "@tanstack/react-query"

import { sleep } from "@/lib/utils"
import {
  CategoryCardWrapper as CategoryCard,
  CategoryCardSkeletonWrapper as CategoryCardSkeleton,
  InfiniteScrollWrapper as InfiniteScroll,
} from "@/components/common/category-list/style"

interface CategoryListProps {
  categories: ICategoryData[]
}

export function CategoryList({ categories }: CategoryListProps) {
  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["category-list"],
      queryFn: async ({ pageParam = 1 }) => {
        if (pageParam === 2) {
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
        if (pages.length === 2) {
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
    >
      {categoryData.map((category, index) => (
        <CategoryCard
          key={index}
          data-index={index}
          category={category}
          style={{ order: index }}
        />
      ))}

      {isFetchingNextPage &&
        [...(Array(8) as number[])].map((_, index) => (
          <CategoryCardSkeleton
            key={index + categoryData.length}
            style={{ order: index + categoryData.length }}
          />
        ))}
    </InfiniteScroll>
  )
}
