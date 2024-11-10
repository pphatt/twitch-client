import * as z from "zod"

export const ResendOtpRequestDtoSchema = z.object({
  name: z.string(),
})

export type ResendOtpRequestDto = z.infer<typeof ResendOtpRequestDtoSchema>
