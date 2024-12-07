import * as z from "zod"

export const IsFollowUserRequestDtoSchema = z.object({
  destinationUserId: z.string(),
})

export type IsFollowUserRequestDto = z.infer<typeof IsFollowUserRequestDtoSchema>
