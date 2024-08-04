"use client"

import * as React from "react"
import Link from "next/link"
import type { ICategoryData } from "@/types"

import { formatViewCount } from "@/lib/utils"
import * as Primitive from "@/components/common/category-card/style"
import { Tags } from "@/components/common/tag/tag"

interface CategoryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  category: ICategoryData
}

export const CategoryCard = React.forwardRef<HTMLDivElement, CategoryCardProps>(
  ({ category, ...props }, ref) => {
    const { title, image, currentTotalView, slug, tags } = category

    return (
      <Primitive.CardWrapper ref={ref} {...props}>
        <Primitive.CardContainer>
          <Primitive.Card>
            <Primitive.CardInfo>
              <Primitive.CardImageWrapper href={`/directory/category/${slug}`}>
                <Primitive.TopLeftCornerDiv />
                <Primitive.BottomRightCornerDiv />
                <Primitive.LeftBarDiv />
                <Primitive.BottomBarDiv />
                <Primitive.CardImageContainer>
                  <Primitive.CardImagePlaceholderWrapper>
                    <Primitive.CardImagePlaceholderContainer>
                      <Primitive.CardImagePlaceholder />
                      <Primitive.CardImage src={image} alt={title} />
                    </Primitive.CardImagePlaceholderContainer>
                  </Primitive.CardImagePlaceholderWrapper>
                </Primitive.CardImageContainer>
              </Primitive.CardImageWrapper>

              <Primitive.CardBody>
                <Primitive.CategoryTitle>
                  <Link href={`/directory/category/${slug}`}>
                    <h2>{title}</h2>
                  </Link>
                </Primitive.CategoryTitle>

                <Primitive.CategoryCurrentTotalView>
                  <Link href={`/directory/category/${slug}`}>
                    {formatViewCount(currentTotalView)} viewers
                  </Link>
                </Primitive.CategoryCurrentTotalView>
              </Primitive.CardBody>
            </Primitive.CardInfo>

            <Tags tags={tags} />
          </Primitive.Card>
        </Primitive.CardContainer>
      </Primitive.CardWrapper>
    )
  }
)
CategoryCard.displayName = "CategoryCard"
