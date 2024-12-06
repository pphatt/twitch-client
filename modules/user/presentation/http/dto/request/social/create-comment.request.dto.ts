import * as z from "zod"

export const CreateCommentRequestDtoSchema = z.object({
  postId: z.string(),
  content: z.string(),
  parentId: z.string().optional(),
})

export type CreateCommentRequestDto = z.infer<
  typeof CreateCommentRequestDtoSchema
>
