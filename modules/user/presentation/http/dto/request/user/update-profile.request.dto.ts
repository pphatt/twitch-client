import * as z from "zod"

export const UpdateProfileRequestDtoSchema = z.object({
  displayName: z
    .string()
    .min(4, {
      message: "*Username must be at least 4 characters long",
    })
    .regex(/^[a-zA-Z0-9 ]+$/, {
      message: "*Username must only contain alphanumeric characters and spaces",
    }),
  bio: z.string().max(300, {
    message: "*Bio description must be under 300 characters",
  }),
})

export type UpdateProfileRequestDto = z.infer<
  typeof UpdateProfileRequestDtoSchema
>
