import * as z from "zod"

export const ValidateEmailSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
})

export const ForgetPasswordRequestSchema = z.object({
  emailOrPhone: z.string().email({
    message: "Please enter a valid email address",
  }),
})

export type ValidateEmailDto = z.infer<typeof ValidateEmailSchema>

export type ForgetPasswordRequestDto = z.infer<typeof ForgetPasswordRequestSchema>
