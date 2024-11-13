import { clearTokens } from "@/utils/auth.utils"
import type { User } from "@modules/core/domain-base/entity/identity/user.entity"
import {
  Auth,
  NextAuth,
} from "@modules/core/presentation/endpoints/auth/auth.request"
import { BackendURL } from "@modules/core/presentation/endpoints/default.endpoints"
import { NextUser } from "@modules/core/presentation/endpoints/user/user.request"
import { TokenPayload } from "@modules/user/application/command/auth/jwt/token.payload"
import type { ForgetPasswordRequestDto } from "@modules/user/presentation/http/dto/request/auth/forget-password.request.dto"
import type { ForgetUsernameRequestDto } from "@modules/user/presentation/http/dto/request/auth/forget-username.request.dto"
import type { OtpRequestDto } from "@modules/user/presentation/http/dto/request/auth/otp.request.dto"
import type { RefreshTokenRequestDto } from "@modules/user/presentation/http/dto/request/auth/refresh-token.request.dto"
import type { ResetPasswordRequestDto } from "@modules/user/presentation/http/dto/request/auth/reset-password.request.dto"
import type { FormSignInRequestDto } from "@modules/user/presentation/http/dto/request/auth/signin.request.dto"
import type { SignUpRequestDto } from "@modules/user/presentation/http/dto/request/auth/signup.request.dto"
import type { RefreshTokenResponseDto } from "@modules/user/presentation/http/dto/response/auth/refresh-token.response.dto"
import type { SignInResponseDto } from "@modules/user/presentation/http/dto/response/auth/signin.response.dto"
import axios from "axios"
import { jwtDecode } from "jwt-decode"

import type { IUserRepository } from "../../domain/repository/user/user.repository"

export const UserRepository: IUserRepository = {
  async signupWithEmail(body: SignUpRequestDto): Promise<{ status: number }> {
    try {
      const { status } = await Auth.signUpWithEmail(body)
      return { status }
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  },

  async signin(
    body: FormSignInRequestDto
  ): Promise<SignInResponseDto & { profile: User | null }> {
    try {
      const response = await NextAuth.signIn(body)

      const { accessToken, refreshToken, profile } = response.data

      return { accessToken, refreshToken, profile }
    } catch (error) {
      return Promise.reject(error)
    }
  },

  async refreshToken(
    body: RefreshTokenRequestDto
  ): Promise<RefreshTokenResponseDto & { profile: User }> {
    try {
      const response = await Auth.refreshToken(body)

      const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        response.data

      const decode = jwtDecode<TokenPayload>(newAccessToken)

      const { data: userProfileResponse } = (await axios.get(
        `${BackendURL}/users/specific-user/${decode.sub}`
      )) as { data: { data: User } }

      return {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
        profile: userProfileResponse.data,
      }
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  },

  async confirmEmail(body: OtpRequestDto) {
    try {
      await Auth.confirmEmail(body)
      return Promise.resolve()
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
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

  async forgotPassword(body: ForgetPasswordRequestDto): Promise<void> {
    try {
      await Auth.forgotPassword(body)
      return Promise.resolve()
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  },

  async forgetUsername(body: ForgetUsernameRequestDto): Promise<void> {
    try {
      await Auth.forgetUsername(body)
      return Promise.resolve()
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  },

  async resetPassword(body: ResetPasswordRequestDto): Promise<void> {
    try {
      await NextAuth.resetPassword(body)
      return Promise.resolve()
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  },

  async profile(): Promise<{ data: User }> {
    try {
      const response = await NextUser.getProfile()

      const userData = response.data

      return Promise.resolve({ data: userData })
    } catch (error) {
      console.log("Cannot get user profile", error)
      return Promise.reject(error)
    }
  },

  async updateProfile(): Promise<void> {
    return Promise.resolve(undefined)
  },
}
