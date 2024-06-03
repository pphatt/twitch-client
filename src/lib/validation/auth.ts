import * as z from "zod"

export const authSchema = z.object({
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

export const authSignUpSchema = authSchema
  .extend({
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    confirmPassword: authSchema.shape.password,
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Confirm password must match password",
    path: ["confirmPassword"],
  })

export const verifyEmailSchema = z.object({
  code: z
    .string()
    .min(6, {
      message: "Verification code must be 6 characters long",
    })
    .max(6),
})

export const checkEmailSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
})

export const changeUserNameSchema = z.object({
  name: z
    .string()
    .min(4, {
      message: "Please use 4 characters at minimum.",
    })
    .max(32, {
      message: "Please use 32 characters at maximum.",
    }),
})
