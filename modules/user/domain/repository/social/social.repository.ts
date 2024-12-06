import type { CreateCommentRequestDto } from "@modules/user/presentation/http/dto/request/social/create-comment.request.dto"
import type { DeletePostRequestDto } from "@modules/user/presentation/http/dto/request/social/delete-post.request.dto"
import type { FollowUserRequestDto } from "@modules/user/presentation/http/dto/request/social/follow-user.request.dto"
import type { GetPostDetailsRequestDto } from "@modules/user/presentation/http/dto/request/social/get-post-details.request.dto"
import type { GetPostReactionRequestDto } from "@modules/user/presentation/http/dto/request/social/get-post-reaction.request.dto"
import type { ReactToPostRequestDto } from "@modules/user/presentation/http/dto/request/social/react-to-post.request.dto"
import type { UnFollowUserRequestDto } from "@modules/user/presentation/http/dto/request/social/unfollow-user.request.dto"
import type { CreatePostResponseDto } from "@modules/user/presentation/http/dto/response/social/create-post.response.dto"
import type { GetPostDetailsResponseDto } from "@modules/user/presentation/http/dto/response/social/get-post-details.response.dto"
import type { GetPostReactionResponseDto } from "@modules/user/presentation/http/dto/response/social/get-post-reaction.response.dto"

export interface ISocialRepository {
  createPost: (body: FormData) => Promise<{ data: CreatePostResponseDto }>

  editPost: (body: { data: FormData } & { postId: string }) => Promise<void>

  deletePost: (body: DeletePostRequestDto) => Promise<void>

  reactToPost: (body: ReactToPostRequestDto) => Promise<void>

  getPostReaction: (
    body: GetPostReactionRequestDto
  ) => Promise<{ data: GetPostReactionResponseDto }>

  createComment: (body: CreateCommentRequestDto) => Promise<void>

  getPostDetails: (
    body: GetPostDetailsRequestDto & { accessToken: string }
  ) => Promise<{ data: GetPostDetailsResponseDto }>

  followUser: (body: FollowUserRequestDto) => Promise<void>
  unFollowUser: (body: UnFollowUserRequestDto) => Promise<void>
}
