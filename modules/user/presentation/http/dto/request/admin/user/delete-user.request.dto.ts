import * as z from "zod"

export const DeleteUserRequestDtoSchema = z.object({
  userId: z.string(),
})

export type DeleteUserRequestDto = z.infer<
  typeof DeleteUserRequestDtoSchema
>
