import { z } from "zod"

export const userSchema = z.object({
  id: z.string(),
  email: z.string(),
  username: z.string(),
  displayName: z.string(),
  roles: z.array(z.string()),
  status: z.string(),
  phoneNumber: z.string(),
  bio: z.string(),
  isLive: z.boolean(),
  image: z.object({
    url: z.string(),
    publicId: z.string(),
  }),
  createdAt: z.date(),
})

export type User = z.infer<typeof userSchema>
