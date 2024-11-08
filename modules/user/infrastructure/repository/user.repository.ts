import { clearTokens } from "@/utils/auth.utils"
import {
  NextRefreshTokenAPI,
  RefreshTokenAPI,
} from "@modules/core/presentation/endpoints/auth/auth.endpoints"
import {
  Auth,
  NextAuth,
} from "@modules/core/presentation/endpoints/auth/auth.request"
import type { RefreshTokenRequestDto } from "@modules/user/presentation/http/dto/request/auth/refresh-token.request.dto"
import type { SigninRequestDto } from "@modules/user/presentation/http/dto/request/auth/signin.request.dto"
import type { RefreshTokenResponseDto } from "@modules/user/presentation/http/dto/response/auth/refresh-token.response.dto"
import type { SigninResponseDto } from "@modules/user/presentation/http/dto/response/auth/signin.response.dto"
import axios from "axios"

import type { IUserRepository } from "../../domain/repository/user/user.repository"

export const UserRepository: IUserRepository = {
  async signin(body: SigninRequestDto): Promise<SigninResponseDto> {
    try {
      const response = await Auth.signIn(body)

      const { refreshToken, accessToken } = response.data as SigninResponseDto

      return { refreshToken, accessToken }
    } catch (error) {
      throw new Error("Something went wrong. Try again!!!")
    }
  },

  async signup(): Promise<void> {
    return Promise.resolve(undefined)
  },

  async logout(): Promise<void> {
    try {
      await NextAuth.logout()
      clearTokens()
      return Promise.resolve()
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  },

  async forgotPassword(): Promise<void> {
    return Promise.resolve(undefined)
  },

  async resetPassword(): Promise<void> {
    return Promise.resolve(undefined)
  },

  async refreshToken(
    body: RefreshTokenRequestDto
  ): Promise<RefreshTokenResponseDto> {
    try {
      const response = await axios.post(RefreshTokenAPI, body)

      const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        response.data as RefreshTokenResponseDto

      return { accessToken: newAccessToken, refreshToken: newRefreshToken }
    } catch (error) {
      console.log(error)
      throw new Error("Unable to refresh token")
    }
  },

  async profile(): Promise<void> {
    // try {
    //   const response = await axios.get(UserProfileAPI)
    //
    //   const { displayName } = response.data as { displayName: string }
    //
    //   return { displayName }
    // } catch (error) {
    //   console.log("Cannot get user profile", error)
    //   return null
    // }
  },

  async updateProfile(): Promise<void> {
    return Promise.resolve(undefined)
  },
}
