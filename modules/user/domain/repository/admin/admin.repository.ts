import type { GetAllRolesRequestDto } from "@modules/user/presentation/http/dto/request/admin/role/get-all-roles.request.dto"
import type { DeleteUserRequestDto } from "@modules/user/presentation/http/dto/request/admin/user/delete-user.request.dto"
import type { GetAllRolesResponseDto } from "@modules/user/presentation/http/dto/response/admin/role/getl-all-roles.response.dto"
import type { GetAllUsersResponseDto } from "@modules/user/presentation/http/dto/response/admin/user/get-all-users.response.dto"

export interface IAdminRepository {
  getAllUsers: () => Promise<{ data: GetAllUsersResponseDto[] }>

  getAllRoles: (
    body: GetAllRolesRequestDto
  ) => Promise<GetAllRolesResponseDto[]>

  deleteUser: (body: DeleteUserRequestDto) => Promise<void>
}
