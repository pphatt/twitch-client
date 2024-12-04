import * as z from "zod"

export const GetUserPostsRequestDtoSchema = z.object({
  username: z.string(),
  page: z.number().default(1),
  limit: z.number().default(50),
  orderBy: z.string(),
  order: z.string(),
})

export type GetUserPostsRequestDto = z.infer<typeof GetUserPostsRequestDtoSchema>
