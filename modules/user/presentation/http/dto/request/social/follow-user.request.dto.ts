import * as z from "zod"

export const FollowUserRequestDtoSchema = z.object({
  destinationUserId: z.string(),
})

export type FollowUserRequestDto = z.infer<typeof FollowUserRequestDtoSchema>
