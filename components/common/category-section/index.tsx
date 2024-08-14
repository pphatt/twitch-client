"use client"

import * as React from "react"
import Link from "next/link"
import type { ICategoryData } from "@/types"

import { useMediaQuery } from "@/hooks/use-media-query"
import { Separator } from "@/components/ui/separator"
import { CategoryCard } from "@/components/common/category-card"
import {
  ContentListContainer,
  ContentListWrapper,
  ContentSection,
  ContentSectionHeader,
  ContentSectionHeaderText,
} from "@/components/share-styled/directory-content-layout/style"

interface CategorySectionProps {
  categories: ICategoryData[]
}

export default function CategorySection({ categories }: CategorySectionProps) {
  const isScreenWidthAbove2073 = useMediaQuery("(min-width: 2073px)")
  const isScreenWidthAbove1773 = useMediaQuery("(min-width: 1773px)")
  const isScreenWidthAbove1473 = useMediaQuery("(min-width: 1473px)")
  const isScreenWidthAbove983 = useMediaQuery("(min-width: 983px)")

  const getNumberByScreenWidth = React.useMemo(() => {
    if (isScreenWidthAbove2073) {
      return 12
    } else if (isScreenWidthAbove1773) {
      return 10
    } else if (isScreenWidthAbove1473) {
      return 8
    } else if (isScreenWidthAbove983) {
      return 6
    }

    return 4
  }, [
    isScreenWidthAbove1473,
    isScreenWidthAbove1773,
    isScreenWidthAbove2073,
    isScreenWidthAbove983,
  ])

  return (
    <ContentSection>
      <ContentSectionHeader>
        <ContentSectionHeaderText>
          <Link href={"/directory"}>Categories</Link>
          <span> we think you’ll like</span>
        </ContentSectionHeaderText>
      </ContentSectionHeader>

      <ContentListWrapper>
        <ContentListContainer>
          {categories
            .slice(0, getNumberByScreenWidth)
            .map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
        </ContentListContainer>

        <Separator />
      </ContentListWrapper>
    </ContentSection>
  )
}
