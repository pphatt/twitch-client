import * as z from "zod"

export const RejectFriendRequestDtoSchema = z.object({
  senderId: z.string(),
})

export type RejectFriendRequestDto = z.infer<typeof RejectFriendRequestDtoSchema>
