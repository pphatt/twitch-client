import styled, { css } from "styled-components"

import { CategoryCard } from "@/components/common/category-card"
import InfiniteScroll from "@/components/infinite-scroll"
import { CategoryCardSkeleton } from "@/components/loading/lobby/category-card-skeleton"

export const InfiniteScrollWrapper = styled(InfiniteScroll)`
  flex: 1 0 auto;

  max-width: 100%;
  width: 180px;

  padding: 0 5px;
`

const shareCss = css`
  flex: 1 0 auto;

  width: 180px;
`

export const CategoryCardWrapper = styled(CategoryCard)`
  ${shareCss}
`

export const CategoryCardSkeletonWrapper = styled(CategoryCardSkeleton)`
  ${shareCss}
`
