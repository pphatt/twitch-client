export type GetUserPostsResponseDto = {
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
    images: [
      {
        url: string
      },
    ]
    commentCount: number,
    reactionCount: number,
    isShared: true
    isTagged: true,
    viewCount: number
  }
}
