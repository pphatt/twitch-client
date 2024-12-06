import * as z from "zod"

import { EReactionType } from "@/components/layouts/social/details/reaction-button"

export const ReactToPostRequestDtoSchema = z.object({
  postId: z.string(),
  reactionType: z.nativeEnum(EReactionType),
})

export type ReactToPostRequestDto = z.infer<typeof ReactToPostRequestDtoSchema>
