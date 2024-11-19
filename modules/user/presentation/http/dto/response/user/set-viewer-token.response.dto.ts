import * as z from "zod"

export const SetViewerTokenResponseDtoSchema = z.object({
  viewerToken: z.string(),
})

export type SetViewerTokenResponseDto = z.infer<
  typeof SetViewerTokenResponseDtoSchema
>
