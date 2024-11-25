export interface TagEntity {
  name: string
  slug: string
  applicableTo: ETag
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}

enum ETag {
  CATEGORY = "Category",
  LIVESTREAM = "Livestream",
}
