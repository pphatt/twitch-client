import type {PostDetailsDto} from "@modules/user/presentation/http/dto/response/social/get-post-details.response.dto";

export type GetMyFeedResponseDto = {
  posts: PostDetailsDto[]
}