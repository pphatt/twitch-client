import * as z from "zod"

export const UnFollowUserRequestDtoSchema = z.object({
  destinationUserId: z.string(),
})

export type UnFollowUserRequestDto = z.infer<typeof UnFollowUserRequestDtoSchema>
