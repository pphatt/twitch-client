import * as z from "zod"

export const AddFriendRequestDtoSchema = z.object({
  receiverId: z.string(),
})

export type AddFriendRequestDto = z.infer<typeof AddFriendRequestDtoSchema>
