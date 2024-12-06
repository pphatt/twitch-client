import type { EReactionType } from "@/components/layouts/social/details/reaction-button"

export type GetPostReactionResponseDto = {
  type: EReactionType
  reactionCount: number
  users: {
    id: string
    username: string
    avatar: string
    reactionCount: EReactionType
  }[]
}
