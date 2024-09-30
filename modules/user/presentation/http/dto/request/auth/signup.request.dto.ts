import * as z from "zod"

export const SignupRequestDtoSchema = z
  .object({
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    username: z.string().min(4, {
      message: "Username must be at least 4 characters long",
    }),
    password: z
      .string()
      .min(8, {
        message: "Password must be at least 8 characters long",
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
    confirmPassword: z
      .string()
      .min(8, {
        message: "Password must be at least 8 characters long",
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
    dob: z.date(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Confirm password must match password",
    path: ["confirmPassword"],
  })

export type SignupRequestDto = z.infer<typeof SignupRequestDtoSchema>
