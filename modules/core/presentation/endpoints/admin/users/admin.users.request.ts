import {
  DeletedUserAPI,
  GetAllUsersAPI,
  GetUserDetailsAPI, NextDeleteUserAPI,
  NextGetAllUsersAPI,
} from "@modules/core/presentation/endpoints/admin/users/admin.users.endpoints"
import type { DeleteUserRequestDto } from "@modules/user/presentation/http/dto/request/admin/user/delete-user.request.dto"
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

  deleteUser: async (body: DeleteUserRequestDto, config: AxiosRequestConfig) =>
    axios.delete(`${DeletedUserAPI}/${body.userId}`, config),
}

export const NextAdminUsersRequest = {
  getAllUsers: async (): Promise<{
    data: { data: GetAllUsersResponseDto[] }
  }> => axios.get(NextGetAllUsersAPI),

  deleteUser: async (body: DeleteUserRequestDto) =>
    axios.delete(`${NextDeleteUserAPI}/${body.userId}`),
}
