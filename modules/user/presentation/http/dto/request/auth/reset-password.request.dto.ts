import { z } from "zod"

export const ResetPasswordRequestSchema = z
  .object({
    password: z
      .string()
      .min(8, {
        message:
          "*Invalid Password. Passwords must be between 8 and 71 characters and not be easily guessable.",
      })
      .max(71, {
        message:
          "*Invalid Password. Passwords must be between 8 and 71 characters and not be easily guessable.",
      })
      .regex(
        new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
        ),
        {
          message:
            "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
        }
      ),
    confirmPassword: z.string(),
    token: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "*Password does not match",
    path: ["confirmPassword"],
  })

export type ResetPasswordRequestDto = z.infer<typeof ResetPasswordRequestSchema>
