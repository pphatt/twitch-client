import * as z from "zod"

export const GetSpecificUserByNameDtoSchema = z.object({
  id: z.string(),
  email: z.string(),
  username: z.string(),
  displayName: z.string(),
  bio: z.string().default(""),
  createdAt: z.date(),
  numberOfFollowers: z.number(),
  numberOfFollowings: z.number(),
  status: z.string(),
  image: z.object({
    url: z.string(),
    publicId: z.string(),
  }),
})

export type GetSpecificUserByNameResponseDto = z.infer<
  typeof GetSpecificUserByNameDtoSchema
>
