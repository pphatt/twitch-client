import * as z from "zod"

export const UpdateDisplayNameRequestDtoSchema = z.object({
  displayName: z
    .string()
    .min(4, {
      message: "*Username must be at least 4 characters long",
    })
    .regex(/^[a-zA-Z0-9 ]+$/, {
      message: "*Username must only contain alphanumeric characters and spaces",
    })
})

export type UpdateDisplayNameRequestDto = z.infer<
  typeof UpdateDisplayNameRequestDtoSchema
>
