import {
  CreatePostAPI,
  DeletePostsAPI,
  GetAllUserPostsAPI,
  NextCreatePostAPI,
  NextDeletePostAPI,
} from "@modules/core/presentation/endpoints/social/social.endpoints"
import type { DeletePostRequestDto } from "@modules/user/presentation/http/dto/request/social/delete-post.request.dto"
import type { CreatePostResponseDto } from "@modules/user/presentation/http/dto/response/social/create-post.response.dto"
import type { GetUserPostsResponseDto } from "@modules/user/presentation/http/dto/response/social/get-user-posts.response.dto"
import axios, { type AxiosRequestConfig } from "axios"

export const Social = {
  createPost: async (
    body: FormData,
    config: AxiosRequestConfig
  ): Promise<{
    data: CreatePostResponseDto
  }> => axios.post(CreatePostAPI, body, config),

  deletePost: async (body: DeletePostRequestDto, config: AxiosRequestConfig) =>
    axios.delete(`${DeletePostsAPI}?postId=${body.postId}`, config),

  getUserPosts: async (
    username: string,
    query?: string
  ): Promise<{
    data: {
      data: {
        posts: GetUserPostsResponseDto[]
        totalPosts: number
        totalPage: number
      }
    }
  }> =>
    axios.get(
      `${GetAllUserPostsAPI}/${username}?${query ?? "?page=1&limit=10&orderBy=createdAt&order=desc"}`
    ),
}

export const NextSocial = {
  createPost: async (
    body: FormData
  ): Promise<{
    data: CreatePostResponseDto
  }> => axios.post(NextCreatePostAPI, body),

  deletePost: async (body: DeletePostRequestDto) =>
    axios.post(NextDeletePostAPI, body),
}
