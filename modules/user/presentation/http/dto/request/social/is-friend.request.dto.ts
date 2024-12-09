import * as z from "zod"

export const IsFriendRequestDtoSchema = z.object({
  username : z.string(),
})

export type IsFriendRequestDto = z.infer<
  typeof IsFriendRequestDtoSchema
>
