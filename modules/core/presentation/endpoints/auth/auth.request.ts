import {
  ConfirmEmailAPI,
  ForgetUsername,
  ForgotPasswordAPI,
  LogoutAPI,
  NextLogoutAPI,
  NextRefreshTokenAPI,
  NextResetPasswordAPI,
  NextSignInAPI,
  RefreshTokenAPI,
  ResendConfirmEmailAPI,
  ResetPasswordAPI,
  SignInAPI,
  SignUpWithEmailAPI,
} from "@modules/core/presentation/endpoints/auth/auth.endpoints"
import type { ForgetPasswordRequestDto } from "@modules/user/presentation/http/dto/request/auth/forget-password.request.dto"
import type { ForgetUsernameRequestDto } from "@modules/user/presentation/http/dto/request/auth/forget-username.request.dto"
import type { OtpRequestDto } from "@modules/user/presentation/http/dto/request/auth/otp.request.dto"
import type { RefreshTokenRequestDto } from "@modules/user/presentation/http/dto/request/auth/refresh-token.request.dto"
import type { ResendOtpRequestDto } from "@modules/user/presentation/http/dto/request/auth/resend-otp.request.dto"
import type { ResetPasswordRequestDto } from "@modules/user/presentation/http/dto/request/auth/reset-password.request.dto"
import type {
  FormSignInRequestDto,
  SignInRequestDto,
} from "@modules/user/presentation/http/dto/request/auth/signin.request.dto"
import type { SignUpRequestDto } from "@modules/user/presentation/http/dto/request/auth/signup.request.dto"
import type { RefreshTokenResponseDto } from "@modules/user/presentation/http/dto/response/auth/refresh-token.response.dto"
import type { SignInResponseDto } from "@modules/user/presentation/http/dto/response/auth/signin.response.dto"
import axios, { type AxiosRequestConfig } from "axios"
import type {WhoamiResponseDto} from "@modules/user/presentation/http/dto/response/user/whoami.reponse.dto";

export const Auth = {
  signUpWithEmail: async (body: SignUpRequestDto) =>
    axios.post(SignUpWithEmailAPI, body),
  // signUpWithPhone: async (body) => axios.post(SignUpWithPhoneAPI),
  signIn: async (
    body: SignInRequestDto
  ): Promise<{ data: { data: SignInResponseDto } }> =>
    axios.post(SignInAPI, body),
  refreshToken: async (
    body: RefreshTokenRequestDto
  ): Promise<{ data: RefreshTokenResponseDto }> =>
    axios.post(RefreshTokenAPI, body),
  // toggle2FA: async (body) => axios.post(""),
  confirmEmail: async (body: OtpRequestDto) =>
    axios.post(ConfirmEmailAPI, body),
  resendConfirmEmail: async (body: ResendOtpRequestDto) =>
    axios.post(ResendConfirmEmailAPI, body),
  forgotPassword: async (body: ForgetPasswordRequestDto) =>
    axios.post(ForgotPasswordAPI, body),
  forgetUsername: async (body: ForgetUsernameRequestDto) =>
    axios.post(ForgetUsername, body),
  resetPassword: async (body: ResetPasswordRequestDto) =>
    axios.post(`${ResetPasswordAPI}/${body.token}`, body),
  // logoutFromAllDevice: async (body) => axios.post(""),
  logout: async (config: AxiosRequestConfig) =>
    axios.post(LogoutAPI, {}, config),
  // logoutSpecificDevice: async (body) => axios.post(""),
}

export const NextAuth = {
  signIn: async (
    body: FormSignInRequestDto
  ): Promise<{ data: SignInResponseDto & { profile: WhoamiResponseDto | null } }> =>
    axios.post(NextSignInAPI, body),
  refreshToken: async (
    body: RefreshTokenRequestDto
  ): Promise<{ data: RefreshTokenResponseDto }> =>
    axios.post(NextRefreshTokenAPI, body),
  resetPassword: async (body: ResetPasswordRequestDto) =>
    axios.post(NextResetPasswordAPI, body),
  logout: async () => axios.post(NextLogoutAPI),
}
