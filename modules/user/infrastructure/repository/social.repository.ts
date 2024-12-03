import { NextSocial } from "@modules/core/presentation/endpoints/social/social.request"
import type { ISocialRepository } from "@modules/user/domain/repository/social/social.repository"
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
}
