import type { DeletePostRequestDto } from "@modules/user/presentation/http/dto/request/social/delete-post.request.dto"
import type { GetPostDetailsRequestDto } from "@modules/user/presentation/http/dto/request/social/get-post-details.request.dto"
import type { CreatePostResponseDto } from "@modules/user/presentation/http/dto/response/social/create-post.response.dto"
import type { GetPostDetailsResponseDto } from "@modules/user/presentation/http/dto/response/social/get-post-details.response.dto"

export interface ISocialRepository {
  createPost: (body: FormData) => Promise<{ data: CreatePostResponseDto }>

  deletePost: (body: DeletePostRequestDto) => Promise<void>

  getPostDetails: (
    body: GetPostDetailsRequestDto & { accessToken: string }
  ) => Promise<{ data: GetPostDetailsResponseDto }>
}
