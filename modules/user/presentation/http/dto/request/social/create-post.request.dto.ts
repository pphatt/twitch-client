import type { FilePondFile } from "filepond"
import * as z from "zod"

export const CreatePostRequestDtoSchema = z.object({
  content: z.string().max(1000),
  images: z.custom<FilePondFile[]>().optional(),
  tags: z.array(z.string()).optional(),
})

export type CreatePostRequestDto = z.infer<typeof CreatePostRequestDtoSchema>
