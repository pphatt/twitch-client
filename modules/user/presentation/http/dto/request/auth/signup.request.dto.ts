import * as z from "zod"

export const SignUpRequestDtoSchema = z
  .object({
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    name: z.string().min(4, {
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
    dob: z.string(),
  })

export type SignUpRequestDto = z.infer<typeof SignUpRequestDtoSchema>
