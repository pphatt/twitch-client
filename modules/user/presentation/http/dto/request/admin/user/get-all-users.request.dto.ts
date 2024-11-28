import * as z from "zod"

export const GetAllUsersRequestDtoSchema = z.object({
  accessToken: z.string(),
})

export type GetAllUsersRequestDto = z.infer<
  typeof GetAllUsersRequestDtoSchema
>
