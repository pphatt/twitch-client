import * as z from "zod"

export const DeletePostRequestDtoSchema = z.object({
  postId: z.string(),
})

export type DeletePostRequestDto = z.infer<typeof DeletePostRequestDtoSchema>
