import * as z from "zod"

export const SetStreamStatusRequestDtoSchema = z.object({
  userId: z.string(),
  isLive: z.boolean(),
})

export type SetStreamStatusRequestDto = z.infer<
  typeof SetStreamStatusRequestDtoSchema
>
