import * as z from "zod"

import { EReactionType } from "@/components/layouts/social/details/reaction-button"

export const GetPostReactionRequestDtoSchema = z.object({
  postId: z.string(),
  reactionType: z.nativeEnum(EReactionType),
})

export type GetPostReactionRequestDto = z.infer<typeof GetPostReactionRequestDtoSchema>
