export type GetUserPostsResponseDto = {
  user: {
    id: string
    username: string
    avatar: string
  }
  info: {
    createdAt: string
    visibility: string
    content: string
    images: [
      {
        url: string
      },
    ]
    isShared: true
    isTagged: true
  }
}
