import {
  IsValidUsernameAPI,
  NextUpdateProfileAPI,
  NextUpdateProfilePictureAPI,
  NextUpdateUsernameAPI,
  NextWhoamiAPI,
  UpdateBioAPI,
  UpdateDisplayNameAPI,
  UpdateProfilePictureAPI,
  UpdateUsernameAPI,
  WhoamiAPI,
} from "@modules/core/presentation/endpoints/user/user.endpoints"
import type { IsValidUsernameRequestDto } from "@modules/user/presentation/http/dto/request/user/is-valid-username.request.dto"
import type { UpdateBioRequestDto } from "@modules/user/presentation/http/dto/request/user/update-bio.request.dto"
import type { UpdateDisplayNameRequestDto } from "@modules/user/presentation/http/dto/request/user/update-displayname.request.dto"
import type { UpdateProfileRequestDto } from "@modules/user/presentation/http/dto/request/user/update-profile.request.dto"
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
  updateDisplayName: async (
    body: UpdateDisplayNameRequestDto,
    config: AxiosRequestConfig
  ): Promise<void> => axios.patch(UpdateDisplayNameAPI, body, config),
  updateBio: async (
    body: UpdateBioRequestDto,
    config: AxiosRequestConfig
  ): Promise<void> => axios.patch(UpdateBioAPI, body, config),
  updateProfilePicture: async (
    body: FormData,
    config: AxiosRequestConfig
  ): Promise<void> => axios.post(UpdateProfilePictureAPI, body, config),
}

export const NextUser = {
  whoami: async (): Promise<{ data: WhoamiResponseDto }> =>
    axios.get(NextWhoamiAPI),
  updateUsername: async (
    body: UpdateUsernameRequestDto
  ): Promise<{ message: string }> => axios.post(NextUpdateUsernameAPI, body),
  updateProfile: async (body: UpdateProfileRequestDto): Promise<void> =>
    axios.post(NextUpdateProfileAPI, body),
  updateProfilePicture: async (
    body: FormData
  ): Promise<{ data: { profile: WhoamiResponseDto | null } }> =>
    axios.post(NextUpdateProfilePictureAPI, body),
}
