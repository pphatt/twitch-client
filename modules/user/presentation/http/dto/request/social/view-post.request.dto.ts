import * as z from "zod"

export const ViewPostRequestDtoSchema = z.object({
  postId: z.string(),
})

export type ViewPostRequestDto = z.infer<typeof ViewPostRequestDtoSchema>
