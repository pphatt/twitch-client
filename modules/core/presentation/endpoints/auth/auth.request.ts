import {
  ConfirmEmailAPI,
  LogoutAPI,
  NextLogoutAPI,
  NextRefreshTokenAPI,
  NextSignInAPI,
  SignInAPI,
  SignUpWithEmailAPI,
  SignUpWithPhoneAPI,
} from "@modules/core/presentation/endpoints/auth/auth.endpoints"
import { OtpRequestDto } from "@modules/user/presentation/http/dto/request/auth/otp.request.dto"
import type {
  FormSignInRequestDto,
  SignInRequestDto,
} from "@modules/user/presentation/http/dto/request/auth/signin.request.dto"
import type { SignUpRequestDto } from "@modules/user/presentation/http/dto/request/auth/signup.request.dto"
import type { SignInResponseDto } from "@modules/user/presentation/http/dto/response/auth/signin.response.dto"
import axios, { type AxiosRequestConfig } from "axios"

export const Auth = {
  signUpWithEmail: async (body: SignUpRequestDto) =>
    axios.post(SignUpWithEmailAPI, body),
  signUpWithPhone: async (body) => axios.post(SignUpWithPhoneAPI),
  signIn: async (
    body: SignInRequestDto
  ): Promise<{ data: { data: SignInResponseDto } }> =>
    axios.post(SignInAPI, body),
  refreshToken: async (body) => axios.post(NextRefreshTokenAPI),
  toggle2FA: async () => axios.post(""),
  confirmEmail: async (body: OtpRequestDto) =>
    axios.post(ConfirmEmailAPI, body),
  resendConfirmEmail: async () => axios.post(""),
  forgotPassword: async () => axios.post(""),
  resetPassword: async (token: string) => axios.post(""),
  logoutFromAllDevice: async () => axios.post(""),
  logout: async (config: AxiosRequestConfig) =>
    axios.post(LogoutAPI, {}, config),
  logoutSpecificDevice: async () => axios.post(""),
}

export const NextAuth = {
  signIn: async (body: FormSignInRequestDto): Promise<SignInResponseDto> =>
    axios.post(NextSignInAPI, body),
  logout: async () => axios.post(NextLogoutAPI),
}
