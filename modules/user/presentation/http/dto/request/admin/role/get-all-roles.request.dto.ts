import * as z from "zod"

export const GetAllRolesRequestDtoSchema = z.object({
  accessToken: z.string(),
})

export type GetAllRolesRequestDto = z.infer<typeof GetAllRolesRequestDtoSchema>
