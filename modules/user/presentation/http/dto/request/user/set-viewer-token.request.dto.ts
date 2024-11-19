import * as z from "zod"

export const SetViewerTokenRequestDtoSchema = z.object({
  hostIdentity: z.string(),
})

export type SetViewerTokenRequestDto = z.infer<
  typeof SetViewerTokenRequestDtoSchema
>
