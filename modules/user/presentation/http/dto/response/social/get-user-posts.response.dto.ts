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
    isShared: true
    isTagged: true,
    viewCount: number
  }
}
