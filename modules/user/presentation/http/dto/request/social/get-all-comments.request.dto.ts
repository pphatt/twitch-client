import * as z from "zod"

export const GetPostCommentsRequestDtoSchema = z.object({
  postId: z.string(),
  accessToken: z.string()
})

export type GetPostCommentsRequestDto = z.infer<typeof GetPostCommentsRequestDtoSchema>
