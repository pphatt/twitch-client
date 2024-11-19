import * as z from "zod"

export const GetStreamKeyRequestDtoSchema = z.object({
  accessToken: z.string(),
})

export type GetStreamKeyRequestDto = z.infer<
  typeof GetStreamKeyRequestDtoSchema
>
