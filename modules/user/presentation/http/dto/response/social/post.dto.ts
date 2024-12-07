import type {EReactionType} from "@/components/layouts/social/details/reaction-button";

export type PostDto = {
  user: {
    id: string
    username: string
    avatar: string
  }
  info: {
    id: string
    createdAt: Date
    visibility: string
    content: string
    images: string[],
    viewCount: number
    commentCount: number
    reactionCount: number
    reactions: { type: EReactionType; count: number }[]
    currentReaction?: EReactionType
  }
}
