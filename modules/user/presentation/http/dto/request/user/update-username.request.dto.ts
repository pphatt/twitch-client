import * as z from "zod"

export const UpdateUsernameRequestDtoSchema = z.object({
  username: z
    .string()
    .min(4, {
      message: "*Username must be at least 4 characters long",
    })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "*Username must only contain alphanumeric characters",
    }),
})

export type UpdateUsernameRequestDto = z.infer<
  typeof UpdateUsernameRequestDtoSchema
>
