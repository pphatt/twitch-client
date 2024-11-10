import * as z from "zod"

export const FormOtpRequestDtoSchema = z.object({
  otp: z.string().min(6),
})

export const OtpRequestDtoSchema = z.object({
  otp: z.string().min(6),
  username: z.string(),
})

export type FormOtpRequestDto = z.infer<typeof FormOtpRequestDtoSchema>

export type OtpRequestDto = z.infer<typeof OtpRequestDtoSchema>
