import { NextAdminRolesRequest } from "@modules/core/presentation/endpoints/admin/role/admin.roles.request"
import { NextAdminUsersRequest } from "@modules/core/presentation/endpoints/admin/users/admin.users.request"
import type { IAdminRepository } from "@modules/user/domain/repository/admin/admin.repository"
import type { GetAllRolesRequestDto } from "@modules/user/presentation/http/dto/request/admin/role/get-all-roles.request.dto"
import type { GetAllRolesResponseDto } from "@modules/user/presentation/http/dto/response/admin/role/getl-all-roles.response.dto"
import type { GetAllUsersResponseDto } from "@modules/user/presentation/http/dto/response/admin/user/get-all-users.response.dto"

export const AdminRepository: IAdminRepository = {
  async getAllUsers(): Promise<{ data: GetAllUsersResponseDto[] }> {
    try {
      const { data } = await NextAdminUsersRequest.getAllUsers()
      return Promise.resolve({ data: data.data })
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  },

  async getAllRoles(
    body: GetAllRolesRequestDto
  ): Promise<GetAllRolesResponseDto[]> {
    try {
      const { data } = await NextAdminRolesRequest.getAllRoles(body)
      return Promise.resolve(data.data)
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  },
}
