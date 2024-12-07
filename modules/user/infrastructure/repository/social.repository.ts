import { NextSocial } from "@modules/core/presentation/endpoints/social/social.request"
import type { ISocialRepository } from "@modules/user/domain/repository/social/social.repository"
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

export const SocialRepository: ISocialRepository = {
  async createPost(body: FormData): Promise<{ data: CreatePostResponseDto }> {
    try {
      const { data } = await NextSocial.createPost(body)

      return Promise.resolve({ data })
    } catch (error) {
      return Promise.reject(error)
    }
  },

  async editPost(body: { data: FormData } & { postId: string }): Promise<void> {
    try {
      await NextSocial.editPost(body)

      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    }
  },

  async deletePost(body: DeletePostRequestDto): Promise<void> {
    try {
      await NextSocial.deletePost(body)

      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    }
  },

  async reactToPost(body: ReactToPostRequestDto): Promise<void> {
    try {
      await NextSocial.reactToPost(body)

      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    }
  },

  async getPostReaction(
    body: GetPostReactionRequestDto
  ): Promise<{ data: GetPostReactionResponseDto }> {
    try {
      const { data } = await NextSocial.getPostReaction(body)

      return Promise.resolve({ data: data.data })
    } catch (error) {
      return Promise.reject(error)
    }
  },

  async createComment(body: CreateCommentRequestDto): Promise<void> {
    try {
      await NextSocial.createPostComment(body)

      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    }
  },

  async getPostDetails(
    body: GetPostDetailsRequestDto & { accessToken: string }
  ): Promise<{ data: GetPostDetailsResponseDto }> {
    try {
      const { data } = await NextSocial.getPostDetails(body)
      return Promise.resolve({ ...data })
    } catch (error) {
      return Promise.reject(error)
    }
  },

  async followUser(body: FollowUserRequestDto): Promise<void> {
    try {
      await NextSocial.followUser(body)
      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    }
  },

  async unFollowUser(body: UnFollowUserRequestDto): Promise<void> {
    try {
      await NextSocial.unFollowUser(body)
      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    }
  },
}
