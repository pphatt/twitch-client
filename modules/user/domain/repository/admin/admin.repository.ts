import type { GetAllRolesRequestDto } from "@modules/user/presentation/http/dto/request/admin/role/get-all-roles.request.dto"
import type { GetAllUsersRequestDto } from "@modules/user/presentation/http/dto/request/admin/user/get-all-users.request.dto"
import type { GetAllRolesResponseDto } from "@modules/user/presentation/http/dto/response/admin/role/getl-all-roles.response.dto"
import type { GetAllUsersResponseDto } from "@modules/user/presentation/http/dto/response/admin/user/get-all-users.response.dto"

export interface IAdminRepository {
  getAllUsers: (
    body: GetAllUsersRequestDto
  ) => Promise<GetAllUsersResponseDto[]>

  getAllRoles: (body: GetAllRolesRequestDto) => Promise<GetAllRolesResponseDto[]>
}
