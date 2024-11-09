import type { RefreshTokenRequestDto } from "@modules/user/presentation/http/dto/request/auth/refresh-token.request.dto"
import type { FormSignInRequestDto } from "@modules/user/presentation/http/dto/request/auth/signin.request.dto"
import type { RefreshTokenResponseDto } from "@modules/user/presentation/http/dto/response/auth/refresh-token.response.dto"
import type { SignInResponseDto } from "@modules/user/presentation/http/dto/response/auth/signin.response.dto"

export interface IUserRepository {
  // auth
  signin: (body: SignInRequestDto) => Promise<SignInResponseDto>
  signup: () => Promise<void>
  logout: () => Promise<void>
  forgotPassword: () => Promise<void>
  resetPassword: () => Promise<void>
  refreshToken: (
    body: RefreshTokenRequestDto
  ) => Promise<RefreshTokenResponseDto>

  // user
  profile: () => Promise<void>
  updateProfile: () => Promise<void>
}
