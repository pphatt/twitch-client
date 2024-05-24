"use client"

import * as React from "react"
import type { ICategoryData } from "@/types"
import { useInfiniteQuery } from "@tanstack/react-query"

import { useIntersection } from "@/hooks/use-intersection-observer"
import { CategoryCard } from "@/components/common/category-card"
import { CategoryCardSkeleton } from "@/components/loading/category-card-skeleton"
import styles from "@/styles/components/category-list.module.scss"

interface CategoryListProps {
  categories: ICategoryData[]
}

export function CategoryList({ categories }: CategoryListProps) {
  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["category-list"],
      queryFn: async ({ pageParam = 1 }) => {
        if (pageParam === 10) {
          return []
        }

        await new Promise((resolve) => setTimeout(resolve, 1000))
        return categories
      },
      initialData: () => {
        return {
          pages: [categories],
          pageParams: [],
        }
      },
      initialPageParam: 1,
      getNextPageParam: (_, pages) => pages.length + 1,
      refetchOnWindowFocus: false,
    })

  const categoryData = React.useMemo(() => {
    return data.pages.flatMap((category) => category)
  }, [data])

  const lastRow = React.useRef<HTMLDivElement>(null)
  const { ref: lastRowRef, entry: lastRowEntry } = useIntersection({
    root: lastRow.current,
    threshold: 1,
  })

  React.useEffect(() => {
    if (lastRowEntry?.isIntersecting) {
      void fetchNextPage() // ignore return promise value by using void
      return
    }
  }, [lastRowEntry, fetchNextPage])

  return (
    <>
      {categoryData.map((category, index) => (
        <CategoryCard
          key={index}
          category={category}
          className={styles["category-card"]}
          style={{ order: index }}
          ref={index === categoryData.length - 1 ? lastRowRef : null}
        />
      ))}

      {(isLoading || isFetchingNextPage) &&
        [...(Array(8) as number[])].map((_, index) => (
          <CategoryCardSkeleton
            key={index + categoryData.length}
            style={{ order: index + categoryData.length }}
            className={styles["category-card-skeleton"]}
          />
        ))}
    </>
  )
}
