import * as z from "zod"

export const GetLivestreamInfoResponseDtoSchema = z.object({
  title: z.string(),
  categoryId: z.string(),
})

export type GetLivestreamInfoResponseDto = z.infer<
  typeof GetLivestreamInfoResponseDtoSchema
>
