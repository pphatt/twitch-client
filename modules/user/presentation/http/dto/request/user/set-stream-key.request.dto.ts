import * as z from "zod"

export const SetStreamKeyRequestDtoSchema = z.object({
  streamKey: z.string(),
  serverUrl: z.string(),
})

export type SetStreamKeyRequestDto = z.infer<
  typeof SetStreamKeyRequestDtoSchema
>
