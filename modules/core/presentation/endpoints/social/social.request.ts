import {
  CreatePostAPI,
  NextCreatePostAPI,
} from "@modules/core/presentation/endpoints/social/social.endpoints"
import axios, { type AxiosRequestConfig } from "axios"
import type {CreatePostResponseDto} from "@modules/user/presentation/http/dto/response/social/create-post.response.dto";

export const Social = {
  createPost: async (
    body: FormData,
    config: AxiosRequestConfig
  ): Promise<{
    data: { data: CreatePostResponseDto }
  }> => axios.post(CreatePostAPI, body, config),
}

export const NextSocial = {
  createPost: async (
    body: FormData
  ): Promise<{
    data: CreatePostResponseDto
  }> => axios.post(NextCreatePostAPI, body),
}
