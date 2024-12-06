export type GetPostDetailsResponseDto = {
  post: PostDetailsDto
}

export type PostDetailsDto = {
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
    ],
    viewCount: number
  }
}
