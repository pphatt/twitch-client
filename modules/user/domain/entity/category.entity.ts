import type { TagEntity } from "@modules/user/domain/entity/tag.entity"

export interface CategoryEntity {
  id: string
  currentTotalView: number
  numberOfFollowers: number
  name: string
  slug: string
  image: string
  tags: TagEntity[]
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
}
