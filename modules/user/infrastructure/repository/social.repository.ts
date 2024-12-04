import { NextSocial } from "@modules/core/presentation/endpoints/social/social.request"
import type { ISocialRepository } from "@modules/user/domain/repository/social/social.repository"
import type { DeletePostRequestDto } from "@modules/user/presentation/http/dto/request/social/delete-post.request.dto"
import type { CreatePostResponseDto } from "@modules/user/presentation/http/dto/response/social/create-post.response.dto"

export const SocialRepository: ISocialRepository = {
  async createPost(
    body: FormData
  ): Promise<{ data: { data: CreatePostResponseDto } }> {
    try {
      const { data } = await NextSocial.createPost(body)

      return Promise.resolve({ data })
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
}
