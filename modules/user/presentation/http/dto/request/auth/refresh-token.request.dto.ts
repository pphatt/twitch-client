import * as z from "zod"

export const RefreshTokenRequestDtoSchema = z.object({
  refreshToken: z.string(),
})

export type RefreshTokenRequestDto = z.infer<
  typeof RefreshTokenRequestDtoSchema
>
