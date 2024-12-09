import * as z from "zod"

export const AcceptFriendRequestDtoSchema = z.object({
  senderId: z.string(),
})

export type AcceptFriendRequestDto = z.infer<typeof AcceptFriendRequestDtoSchema>
