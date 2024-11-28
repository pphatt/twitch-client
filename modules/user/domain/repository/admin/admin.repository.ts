import type { GetAllUsersRequestDto } from "@modules/user/presentation/http/dto/request/admin/user/get-all-users.request.dto"
import type { GetAllUsersResponseDto } from "@modules/user/presentation/http/dto/response/admin/user/get-all-users.response.dto"

export interface IAdminRepository {
  getAllUsers: (
    body: GetAllUsersRequestDto
  ) => Promise<GetAllUsersResponseDto[]>
}
