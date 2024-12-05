import type { FilePondFile } from "filepond"
import * as z from "zod"

export const EditPostRequestDtoSchema = z.object({
  content: z.string().max(1000),
  images: z.custom<FilePondFile[]>().optional(),
  tags: z.array(z.string()).optional(),
})

export type EditPostRequestDto = z.infer<typeof EditPostRequestDtoSchema>
