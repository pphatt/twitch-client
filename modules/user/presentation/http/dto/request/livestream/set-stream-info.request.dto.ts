import * as z from "zod"

export const SetStreamInfoRequestDtoSchema = z.object({
  title: z.string().max(140),
  categoryId: z.string(),
})

export type SetStreamInfoRequestDto = z.infer<
  typeof SetStreamInfoRequestDtoSchema
>
