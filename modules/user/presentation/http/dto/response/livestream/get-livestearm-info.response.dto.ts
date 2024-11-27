import * as z from "zod"

export const GetLivestreamInfoResponseDtoSchema = z.object({
  id: z.string(),
  userId: z.string(),
  userName: z.string(),
  userSlug: z.string(),
  followersCount: z.number(),
  bio: z.string(),
  displayName: z.string(),
  title: z.string().nullable(),
  isLive: z.boolean().nullable(),
  imageUrl: z.string(),
  livestreamCategories: z.array(
    z
      .object({
        _id: z.string(),
        _name: z.string(),
        _slug: z.string(),
        _image: z.string(),
      })
      .nullable()
  ),
})

export type GetLivestreamInfoResponseDto = z.infer<
  typeof GetLivestreamInfoResponseDtoSchema
>
