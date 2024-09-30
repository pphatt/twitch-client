import * as z from "zod"

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
