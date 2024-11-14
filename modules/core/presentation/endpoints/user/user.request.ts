import {
  IsValidUsernameAPI,
  NextUpdateUsernameAPI,
  NextWhoamiAPI,
  UpdateUsernameAPI,
  WhoamiAPI,
} from "@modules/core/presentation/endpoints/user/user.endpoints"
import type { IsValidUsernameRequestDto } from "@modules/user/presentation/http/dto/request/user/is-valid-username.request.dto"
import type { UpdateUsernameRequestDto } from "@modules/user/presentation/http/dto/request/user/update-username.request.dto"
import type { WhoamiResponseDto } from "@modules/user/presentation/http/dto/response/user/whoami.reponse.dto"
import axios, { type AxiosRequestConfig } from "axios"

export const UserRequest = {
  whoami: async (
    config: AxiosRequestConfig
  ): Promise<{ data: { data: WhoamiResponseDto } }> =>
    axios.get(WhoamiAPI, config),
  isValidUsername: async (
    body: IsValidUsernameRequestDto
  ): Promise<{ data: { data: boolean } }> =>
    axios.get(IsValidUsernameAPI, { params: body }),
  updateUsername: async (
    body: UpdateUsernameRequestDto,
    config: AxiosRequestConfig
  ): Promise<{ data: { message: string } }> =>
    axios.patch(UpdateUsernameAPI, body, config),
}

export const NextUser = {
  whoami: async (): Promise<{ data: WhoamiResponseDto }> =>
    axios.get(NextWhoamiAPI),
  updateUsername: async (body: UpdateUsernameRequestDto): Promise<{ message: string }> =>
    axios.post(NextUpdateUsernameAPI, body),
}
