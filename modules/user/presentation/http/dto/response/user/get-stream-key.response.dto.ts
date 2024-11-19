import * as z from "zod"

export const GetStreamKeyResponseDtoSchema = z.object({
  streamKey: z.string().default(""),
  serverUrl: z.string().default(""),
})

export type GetStreamKeyResponseDto = z.infer<
  typeof GetStreamKeyResponseDtoSchema
>
