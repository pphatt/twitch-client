import * as z from "zod"

export const SearchCategoryByNameRequestDtoSchema = z.object({
  keyword: z.string().max(140),
})

export type SearchCategoryByNameRequestDto = z.infer<
  typeof SearchCategoryByNameRequestDtoSchema
>
