import * as z from "zod"

export const UnfriendRequestDtoSchema = z.object({
  friendId: z.string(),
})

export type UnfriendRequestDto = z.infer<typeof UnfriendRequestDtoSchema>
