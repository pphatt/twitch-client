import * as z from "zod"

export const SigninRequestDtoSchema = z.object({
  username: z.string().min(4, {
    message: "Username must be at least 4 characters long",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .regex(
      new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"),
      {
        message:
          "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
      }
    ),
})

export type SigninRequestDto = z.infer<typeof SigninRequestDtoSchema>