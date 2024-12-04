import * as z from "zod"

export const GetSpecificUserByNameDtoSchema = z.object({
  username: z.string(),
})

export type GetSpecificUserByNameRequestDto = z.infer<typeof GetSpecificUserByNameDtoSchema>
