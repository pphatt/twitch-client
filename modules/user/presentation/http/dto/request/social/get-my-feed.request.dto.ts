import * as z from "zod"

export const GetMyFeedRequestDtoSchema = z.object({
  page: z.number().default(1),
  limit: z.number().default(5),
  orderBy: z.string(),
  order: z.string(),
})

export type GetMyFeedRequestDto = z.infer<typeof GetMyFeedRequestDtoSchema>
