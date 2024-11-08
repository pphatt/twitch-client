import {
  ConfirmEmailAPI,
  LogoutAPI,
  NextLogoutAPI,
  NextRefreshTokenAPI,
  NextSignInAPI,
  SignUpWithEmailAPI,
  SignUpWithPhoneAPI,
} from "@modules/core/presentation/endpoints/auth/auth.endpoints"
import type { SigninRequestDto } from "@modules/user/presentation/http/dto/request/auth/signin.request.dto"
import axios, { type AxiosRequestConfig } from "axios"

export const Auth = {
  signUpWithEmail: async (body) => axios.post(SignUpWithEmailAPI),
  signUpWithPhone: async (body) => axios.post(SignUpWithPhoneAPI),
  signIn: async (body: SigninRequestDto) => axios.post(NextSignInAPI, body),
  refreshToken: async (body) => axios.post(NextRefreshTokenAPI),
  toggle2FA: async () => axios.post(""),
  confirmEmail: async () => axios.post(ConfirmEmailAPI),
  resendConfirmEmail: async () => axios.post(""),
  forgotPassword: async () => axios.post(""),
  resetPassword: async (token: string) => axios.post(""),
  logoutFromAllDevice: async () => axios.post(""),
  logout: async (config: AxiosRequestConfig) =>
    axios.post(LogoutAPI, {}, config),
  logoutSpecificDevice: async () => axios.post(""),
}

export const NextAuth = {
  logout: async () => axios.get(NextLogoutAPI),
}
