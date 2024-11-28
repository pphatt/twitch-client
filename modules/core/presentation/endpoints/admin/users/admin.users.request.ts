import {
  GetAllUsersAPI,
  GetUserDetailsAPI,
  NextGetAllUsersAPI,
} from "@modules/core/presentation/endpoints/admin/users/admin.users.endpoints"
import type { GetAllUsersRequestDto } from "@modules/user/presentation/http/dto/request/admin/user/get-all-users.request.dto"
import type { GetSpecificUserRequestDto } from "@modules/user/presentation/http/dto/request/admin/user/get-specific-user.request.dto"
import type { GetAllUsersResponseDto } from "@modules/user/presentation/http/dto/response/admin/user/get-all-users.response.dto"
import axios, { type AxiosRequestConfig } from "axios"

export const AdminUsersRequest = {
  getAllUsers: async (
    config: AxiosRequestConfig
  ): Promise<{ data: { data: GetAllUsersResponseDto[] } }> =>
    axios.get(GetAllUsersAPI, config),

  getSpecificUser: async (
    body: GetSpecificUserRequestDto
  ): Promise<{
    data: { data: GetAllUsersResponseDto }
  }> => axios.get(`${GetUserDetailsAPI}/${body.id}`),
}

export const NextAdminUsersRequest = {
  getAllUsers: async (
    body: GetAllUsersRequestDto
  ): Promise<{ data: { data: GetAllUsersResponseDto[] } }> =>
    axios.get(NextGetAllUsersAPI, {
      headers: {
        cookie: `access-token=${body.accessToken}`,
      },
    }),
}
