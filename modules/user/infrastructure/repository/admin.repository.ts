import { NextAdminUsersRequest } from "@modules/core/presentation/endpoints/admin/users/admin.users.request"
import type { IAdminRepository } from "@modules/user/domain/repository/admin/admin.repository"
import type { GetAllUsersRequestDto } from "@modules/user/presentation/http/dto/request/admin/user/get-all-users.request.dto"
import type { GetAllUsersResponseDto } from "@modules/user/presentation/http/dto/response/admin/user/get-all-users.response.dto"

export const AdminRepository: IAdminRepository = {
  async getAllUsers(
    body: GetAllUsersRequestDto
  ): Promise<GetAllUsersResponseDto[]> {
    try {
      const { data } = await NextAdminUsersRequest.getAllUsers(body)
      return Promise.resolve(data.data)
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  },
}
