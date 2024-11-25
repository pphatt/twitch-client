import * as z from "zod"

export const GetLivestreamInfoRequestDtoSchema = z.object({
  username: z.string(),
})

export type GetLivestreamInfoRequestDto = z.infer<
  typeof GetLivestreamInfoRequestDtoSchema
>
