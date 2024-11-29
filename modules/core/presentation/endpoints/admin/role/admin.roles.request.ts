import {
  GetAllRolesAPI,
  NextGetAllRolesAPI,
} from "@modules/core/presentation/endpoints/admin/role/admin.roles.endpoints"
import type { GetAllRolesRequestDto } from "@modules/user/presentation/http/dto/request/admin/role/get-all-roles.request.dto"
import type { GetAllRolesResponseDto } from "@modules/user/presentation/http/dto/response/admin/role/getl-all-roles.response.dto"
import axios, { type AxiosRequestConfig } from "axios"

export const AdminRolesRequest = {
  getAllRoles: async (
    config: AxiosRequestConfig
  ): Promise<{ data: { data: GetAllRolesResponseDto[] } }> =>
    axios.get(GetAllRolesAPI, config),
}

export const NextAdminRolesRequest = {
  getAllRoles: async (
    body: GetAllRolesRequestDto
  ): Promise<{ data: { data: GetAllRolesResponseDto[] } }> =>
    axios.get(NextGetAllRolesAPI, {
      headers: {
        cookie: `access-token=${body.accessToken}`,
      },
    }),
}
