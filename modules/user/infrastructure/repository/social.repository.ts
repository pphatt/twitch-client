import { NextSocial } from "@modules/core/presentation/endpoints/social/social.request"
import type { ISocialRepository } from "@modules/user/domain/repository/social/social.repository"
import type { DeletePostRequestDto } from "@modules/user/presentation/http/dto/request/social/delete-post.request.dto"
import type { GetPostDetailsRequestDto } from "@modules/user/presentation/http/dto/request/social/get-post-details.request.dto"
import type { CreatePostResponseDto } from "@modules/user/presentation/http/dto/response/social/create-post.response.dto"
import {
  GetPostDetailsResponseDto,
  PostDetailsDto
} from "@modules/user/presentation/http/dto/response/social/get-post-details.response.dto"

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

  async getPostDetails(
    body: GetPostDetailsRequestDto & { accessToken: string }
  ): Promise<{ post: PostDetailsDto }> {
    try {
      const { data } = await NextSocial.getPostDetails(body)
      return Promise.resolve({ ...data })
    } catch (error) {
      return Promise.reject(error)
    }
  },
}
