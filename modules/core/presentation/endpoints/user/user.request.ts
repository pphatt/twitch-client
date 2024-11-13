import {
  NextWhoamiAPI,
  WhoamiAPI,
} from "@modules/core/presentation/endpoints/user/user.endpoints"
import type { WhoamiResponseDto } from "@modules/user/presentation/http/dto/response/user/whoami.reponse.dto"
import axios, { type AxiosRequestConfig } from "axios"

export const UserRequest = {
  whoami: async (
    config: AxiosRequestConfig
  ): Promise<{ data: { data: WhoamiResponseDto } }> =>
    axios.get(WhoamiAPI, config),
}

export const NextUser = {
  whoami: async (): Promise<{ data: WhoamiResponseDto }> =>
    axios.get(NextWhoamiAPI),
}
