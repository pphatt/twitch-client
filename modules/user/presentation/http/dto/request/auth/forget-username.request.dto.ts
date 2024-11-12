import * as z from "zod"

export const ForgetUsernameRequestSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
})

export type ForgetUsernameRequestDto = z.infer<
  typeof ForgetUsernameRequestSchema
>
