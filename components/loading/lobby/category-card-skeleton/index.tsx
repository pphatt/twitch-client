"use client"

import * as React from "react"

import * as Primitive from "@/components/loading/lobby/category-card-skeleton/style"

interface CategoryCardSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function CategoryCardSkeleton({ ...props }: CategoryCardSkeletonProps) {
  return (
    <Primitive.CardSkeletonWrapper {...props}>
      <Primitive.CardSkeletonContainer>
        <Primitive.CardImageSkeletonWrapper>
          <Primitive.CardImageSkeletonOverlay />

          <Primitive.CardImageSkeletonContainer>
            <Primitive.ImageSkeleton />
          </Primitive.CardImageSkeletonContainer>
        </Primitive.CardImageSkeletonWrapper>

        <Primitive.NameSkeletonWrapper />
        <Primitive.ViewSkeletonWrapper />
      </Primitive.CardSkeletonContainer>
    </Primitive.CardSkeletonWrapper>
  )
}
