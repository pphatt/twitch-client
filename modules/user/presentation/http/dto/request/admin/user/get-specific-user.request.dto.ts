import * as z from "zod"

export const GetSpecificUserRequestDtoSchema = z.object({
  id: z.string(),
})

export type GetSpecificUserRequestDto = z.infer<
  typeof GetSpecificUserRequestDtoSchema
>
