import { clearTokens } from "@/utils/auth.utils"
import {
  Auth,
  NextAuth,
} from "@modules/core/presentation/endpoints/auth/auth.request"
import { ForgetPasswordRequestDto } from "@modules/user/presentation/http/dto/request/auth/forget-password.request.dto"
import type { OtpRequestDto } from "@modules/user/presentation/http/dto/request/auth/otp.request.dto"
import type { RefreshTokenRequestDto } from "@modules/user/presentation/http/dto/request/auth/refresh-token.request.dto"
import type { FormSignInRequestDto } from "@modules/user/presentation/http/dto/request/auth/signin.request.dto"
import type { SignUpRequestDto } from "@modules/user/presentation/http/dto/request/auth/signup.request.dto"
import type { RefreshTokenResponseDto } from "@modules/user/presentation/http/dto/response/auth/refresh-token.response.dto"
import type { SignInResponseDto } from "@modules/user/presentation/http/dto/response/auth/signin.response.dto"

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

  async signin(body: FormSignInRequestDto): Promise<SignInResponseDto> {
    try {
      const response = await NextAuth.signIn(body)

      const { refreshToken, accessToken } = response

      return { refreshToken, accessToken }
    } catch (error) {
      return Promise.reject(error)
    }
  },

  async refreshToken(
    body: RefreshTokenRequestDto
  ): Promise<RefreshTokenResponseDto> {
    try {
      const response = await Auth.refreshToken(body)

      const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        response.data as RefreshTokenResponseDto

      return { accessToken: newAccessToken, refreshToken: newRefreshToken }
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  },

  async confirmEmail(body: OtpRequestDto) {
    try {
      await Auth.confirmEmail(body)
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
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  },

  async resetPassword(): Promise<void> {
    return Promise.resolve()
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
