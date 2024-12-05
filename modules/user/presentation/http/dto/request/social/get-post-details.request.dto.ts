import * as z from "zod"

export const GetPostDetailsRequestDtoSchema = z.object({
  postId: z.string(),
})

export type GetPostDetailsRequestDto = z.infer<typeof GetPostDetailsRequestDtoSchema>
