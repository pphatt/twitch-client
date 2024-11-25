import * as z from "zod"

export const SearchCategoryByNameResponseDtoSchema = z.object({
  name: z.string(),
  slug: z.string(),
  image: z.string(),
})

export type SearchCategoryByNameResponseDto = z.infer<
  typeof SearchCategoryByNameResponseDtoSchema
>
