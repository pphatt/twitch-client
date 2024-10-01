import { clearTokens } from "@/utils/auth.utils"
import {
  NextSignInAPI,
  RefreshTokenAPI,
} from "@modules/core/presentation/endpoints/auth.endpoints"
import { UserProfileAPI } from "@modules/core/presentation/endpoints/user.endpoints"
import type { RefreshTokenRequestDto } from "@modules/user/presentation/http/dto/request/auth/refresh-token.request.dto"
import type { SigninRequestDto } from "@modules/user/presentation/http/dto/request/auth/signin.request.dto"
import type { RefreshTokenResponseDto } from "@modules/user/presentation/http/dto/response/auth/refresh-token.response.dto"
import type { SigninResponseDto } from "@modules/user/presentation/http/dto/response/auth/signin.response.dto"
import axios from "axios"

import { authAxiosInstance } from "@/components/axios-instance.auth"

import type { IUserRepository } from "../../domain/repository/user/user.repository"

export const UserRepository: IUserRepository = {
  async signinWithEmail(body: SigninRequestDto): Promise<SigninResponseDto> {
    try {
      const response = await authAxiosInstance.post(NextSignInAPI, {
        username: body.username,
        password: body.password,
      })

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
    // call to logout api to invoke user session
    // const req = authAxios.post("/logout")

    clearTokens()
    return Promise.resolve(undefined)
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
      const response = await axios.post(RefreshTokenAPI, body, {
        withCredentials: true,
      })

      const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        response.data as RefreshTokenResponseDto

      return { accessToken: newAccessToken, refreshToken: newRefreshToken }
    } catch (error) {
      throw new Error("Unable to refresh token")
    }
  },

  async profile(): Promise<{ id: string } | null> {
    try {
      const response = await authAxiosInstance.get(UserProfileAPI)

      const { id } = response.data as { id: string }

      return { id }
    } catch (error) {
      console.log("Cannot get user profile", error)
      return null
    }
  },

  async updateProfile(): Promise<void> {
    return Promise.resolve(undefined)
  },
}
