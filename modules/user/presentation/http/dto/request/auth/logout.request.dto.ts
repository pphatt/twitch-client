import * as z from "zod"

export const TokenLogoutRequestDtoSchema = z.object({
  sub: z.string(),
  deviceId: z.string(),
})

export const LogoutRequestDtoSchema = z.object({
  userId: z.string(),
  deviceId: z.string()
})

export type TokenLogoutRequestDto = z.infer<typeof TokenLogoutRequestDtoSchema>
export type LogoutRequestDto = z.infer<typeof LogoutRequestDtoSchema>
