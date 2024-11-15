import * as z from "zod"

export const WhoamiResponseDtoSchema = z.object({
  id: z.string(),
  email: z.string(),
  username: z.string(),
  displayName: z.string(),
  bio: z.string().default(""),
  allowedChangedUsername: z.boolean(),
  changedUsernameDaysLeft: z.number(),
  numberOfFollowers: z.number(),
  numberOfFollowings: z.number(),
  thumbnail: z.string(),
  isLive: z.boolean(),
  image: z.object({
    url: z.string(),
    publicId: z.string(),
  }),
})

export type WhoamiResponseDto = z.infer<typeof WhoamiResponseDtoSchema>
