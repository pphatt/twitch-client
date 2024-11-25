import {
  GetStreamInfoAPI,
  NextSearchCategoryByNameAPI,
  NextSetStreamInfoAPI,
  SearchCategoryByNameAPI,
  SetStreamInfoAPI,
  SetStreamStatusAPI,
} from "@modules/core/presentation/endpoints/livestream/livestream.endpoints"
import type { CategoryEntity } from "@modules/user/domain/entity/category.entity"
import type { GetLivestreamInfoRequestDto } from "@modules/user/presentation/http/dto/request/livestream/get-livestream-info.request.dto"
import type { SearchCategoryByNameRequestDto } from "@modules/user/presentation/http/dto/request/livestream/search-category-by-name.request.dto"
import type { SetStreamStatusRequestDto } from "@modules/user/presentation/http/dto/request/livestream/set-stearm-status.request.dto"
import type { SetStreamInfoRequestDto } from "@modules/user/presentation/http/dto/request/livestream/set-stream-info.request.dto"
import { GetLivestreamInfoResponseDto } from "@modules/user/presentation/http/dto/response/livestream/get-livestearm-info.response.dto"
import axios, { type AxiosRequestConfig } from "axios"

export const LiveStream = {
  searchCategoryByName: async (
    body: SearchCategoryByNameRequestDto,
    config: AxiosRequestConfig
  ): Promise<{
    data: { data: CategoryEntity[] | null }
  }> => axios.get(`${SearchCategoryByNameAPI}?keyword=${body.keyword}`, config),

  setStreamInfo: async (
    body: SetStreamInfoRequestDto,
    config: AxiosRequestConfig
  ): Promise<void> => axios.patch(SetStreamInfoAPI, body, config),

  setStreamStatus: async (body: SetStreamStatusRequestDto): Promise<void> =>
    axios.post(SetStreamStatusAPI, body),

  getStreamInfo: async (
    body: GetLivestreamInfoRequestDto
  ): Promise<{ data: { data: GetLivestreamInfoResponseDto } }> =>
    axios.get(`${GetStreamInfoAPI}?username=${body.username}`),
}

export const NextLiveStream = {
  searchCategoryByName: async (
    body: SearchCategoryByNameRequestDto
  ): Promise<{
    data: CategoryEntity[] | null
  }> => axios.get(`${NextSearchCategoryByNameAPI}?keyword=${body.keyword}`),

  setStreamInfo: async (body: SetStreamInfoRequestDto): Promise<void> =>
    axios.post(NextSetStreamInfoAPI, body),
}
