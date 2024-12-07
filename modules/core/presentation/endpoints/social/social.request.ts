import {
  CreatePostCommentsAPI,
  FollowUserAPI,
  GetAllUserPostsAPI,
  GetPostCommentsAPI,
  GetPostDetailsAPI,
  GetPostReactionAPI,
  NextCreatePostAPI,
  NextCreatePostCommentsAPI,
  NextDeletePostAPI,
  NextFollowUserAPI,
  NextGetPostDetailsAPI,
  NextGetPostReactionAPI,
  NextReactToPostAPI,
  NextUnFollowUserAPI,
  NextUpdatePostAPI,
  PostAPI,
  ReactToPostAPI,
  UnFollowUserAPI,
  ViewPostAPI,
} from "@modules/core/presentation/endpoints/social/social.endpoints"
import type { CreateCommentRequestDto } from "@modules/user/presentation/http/dto/request/social/create-comment.request.dto"
import type { DeletePostRequestDto } from "@modules/user/presentation/http/dto/request/social/delete-post.request.dto"
import { FollowUserRequestDto } from "@modules/user/presentation/http/dto/request/social/follow-user.request.dto"
import type { GetPostCommentsRequestDto } from "@modules/user/presentation/http/dto/request/social/get-all-comments.request.dto"
import type { GetPostDetailsRequestDto } from "@modules/user/presentation/http/dto/request/social/get-post-details.request.dto"
import type { GetPostReactionRequestDto } from "@modules/user/presentation/http/dto/request/social/get-post-reaction.request.dto"
import type { ReactToPostRequestDto } from "@modules/user/presentation/http/dto/request/social/react-to-post.request.dto"
import { UnFollowUserRequestDto } from "@modules/user/presentation/http/dto/request/social/unfollow-user.request.dto"
import type { ViewPostRequestDto } from "@modules/user/presentation/http/dto/request/social/view-post.request.dto"
import type { CreatePostResponseDto } from "@modules/user/presentation/http/dto/response/social/create-post.response.dto"
import type { GetPostCommentsResponseDto } from "@modules/user/presentation/http/dto/response/social/get-all-comments.response.dto"
import type { GetPostDetailsResponseDto } from "@modules/user/presentation/http/dto/response/social/get-post-details.response.dto"
import type { GetPostReactionResponseDto } from "@modules/user/presentation/http/dto/response/social/get-post-reaction.response.dto"
import type { GetUserPostsResponseDto } from "@modules/user/presentation/http/dto/response/social/get-user-posts.response.dto"
import axios, { type AxiosRequestConfig } from "axios"

export const Social = {
  createPost: async (
    body: FormData,
    config: AxiosRequestConfig
  ): Promise<{
    data: CreatePostResponseDto
  }> => axios.post(PostAPI, body, config),

  editPost: async (
    body: { data: FormData } & { postId: string },
    config: AxiosRequestConfig
  ): Promise<void> =>
    axios.patch(`${PostAPI}/${body.postId}`, body.data, config),

  deletePost: async (
    body: DeletePostRequestDto,
    config: AxiosRequestConfig
  ): Promise<void> => axios.delete(`${PostAPI}?postId=${body.postId}`, config),

  viewPost: async (
    body: ViewPostRequestDto,
    config: AxiosRequestConfig
  ): Promise<void> =>
    axios.patch(`${ViewPostAPI}/${body.postId}`, body, config),

  getPostComments: async (
    body: GetPostCommentsRequestDto
  ): Promise<{ data: { data: GetPostCommentsResponseDto } }> =>
    axios.get(`${GetPostCommentsAPI}/${body.postId}`, {
      headers: {
        Authorization: `Bearer ${body.accessToken}`,
      },
    }),

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

  getPostReaction: async (
    body: GetPostReactionRequestDto,
    config: AxiosRequestConfig
  ): Promise<{ data: { data: GetPostReactionResponseDto } }> =>
    axios.get(
      `${GetPostReactionAPI}?postId=${body.postId}&reactionType=${body.reactionType}`,
      config
    ),

  reactToPost: async (
    body: ReactToPostRequestDto,
    config: AxiosRequestConfig
  ): Promise<void> => axios.post(ReactToPostAPI, body, config),

  createPostComment: async (
    body: CreateCommentRequestDto,
    config: AxiosRequestConfig
  ) => axios.post(`${CreatePostCommentsAPI}/${body.postId}`, body, config),

  getPostDetails: async (
    body: GetPostDetailsRequestDto,
    config: AxiosRequestConfig
  ): Promise<{ data: { data: GetPostDetailsResponseDto } }> =>
    axios.get(`${GetPostDetailsAPI}/${body.postId}`, config),

  followUser: async (
    body: FollowUserRequestDto,
    config: AxiosRequestConfig
  ): Promise<void> =>
    axios.post(`${FollowUserAPI}/${body.destinationUserId}`, {}, config),

  unFollowUser: async (
    body: UnFollowUserRequestDto,
    config: AxiosRequestConfig
  ): Promise<void> =>
    axios.post(`${UnFollowUserAPI}/${body.destinationUserId}`, {}, config),
}

export const NextSocial = {
  createPost: async (
    body: FormData
  ): Promise<{
    data: CreatePostResponseDto
  }> => axios.post(NextCreatePostAPI, body),

  editPost: async (
    body: { data: FormData } & { postId: string }
  ): Promise<void> =>
    axios.patch(`${NextUpdatePostAPI}/${body.postId}`, body.data),

  deletePost: async (body: DeletePostRequestDto) =>
    axios.post(NextDeletePostAPI, body),

  reactToPost: async (body: ReactToPostRequestDto) =>
    axios.post(NextReactToPostAPI, body),

  getPostReaction: async (
    body: GetPostReactionRequestDto
  ): Promise<{ data: { data: GetPostReactionResponseDto } }> =>
    axios.get(
      `${NextGetPostReactionAPI}?postId=${body.postId}&reactionType=${body.reactionType}`
    ),

  createPostComment: async (body: CreateCommentRequestDto) =>
    axios.post(NextCreatePostCommentsAPI, body),

  getPostDetails: async (
    body: GetPostDetailsRequestDto & { accessToken: string }
  ): Promise<{
    data: { data: GetPostDetailsResponseDto }
  }> =>
    axios.get(`${NextGetPostDetailsAPI}/${body.postId}`, {
      headers: {
        "Cache-Control": "no-cache",
        cookie: `access-token=${body.accessToken}`,
      },
    }),

  followUser: async (body: FollowUserRequestDto): Promise<void> =>
    axios.post(NextFollowUserAPI, body),

  unFollowUser: async (body: UnFollowUserRequestDto): Promise<void> =>
    axios.post(NextUnFollowUserAPI, body),
}
