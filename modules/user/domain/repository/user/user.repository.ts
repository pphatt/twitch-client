import type { ForgetPasswordRequestDto } from "@modules/user/presentation/http/dto/request/auth/forget-password.request.dto"
import type { ForgetUsernameRequestDto } from "@modules/user/presentation/http/dto/request/auth/forget-username.request.dto"
import type { OtpRequestDto } from "@modules/user/presentation/http/dto/request/auth/otp.request.dto"
import type { RefreshTokenRequestDto } from "@modules/user/presentation/http/dto/request/auth/refresh-token.request.dto"
import type { ResetPasswordRequestDto } from "@modules/user/presentation/http/dto/request/auth/reset-password.request.dto"
import type { FormSignInRequestDto } from "@modules/user/presentation/http/dto/request/auth/signin.request.dto"
import type { SignUpRequestDto } from "@modules/user/presentation/http/dto/request/auth/signup.request.dto"
import type { IsValidUsernameRequestDto } from "@modules/user/presentation/http/dto/request/user/is-valid-username.request.dto"
import type { UpdateProfileRequestDto } from "@modules/user/presentation/http/dto/request/user/update-profile.request.dto"
import type { UpdateUsernameRequestDto } from "@modules/user/presentation/http/dto/request/user/update-username.request.dto"
import type { RefreshTokenResponseDto } from "@modules/user/presentation/http/dto/response/auth/refresh-token.response.dto"
import type { SignInResponseDto } from "@modules/user/presentation/http/dto/response/auth/signin.response.dto"
import type { WhoamiResponseDto } from "@modules/user/presentation/http/dto/response/user/whoami.reponse.dto"

export interface IUserRepository {
  // auth
  signupWithEmail: (body: SignUpRequestDto) => Promise<{ status: number }>
  refreshToken: (
    body: RefreshTokenRequestDto
  ) => Promise<RefreshTokenResponseDto & { profile: WhoamiResponseDto }>
  confirmEmail: (body: OtpRequestDto) => Promise<void>
  signin: (
    body: FormSignInRequestDto
  ) => Promise<SignInResponseDto & { profile: WhoamiResponseDto | null }>
  logout: () => Promise<void>
  forgotPassword: (body: ForgetPasswordRequestDto) => Promise<void>
  forgetUsername: (body: ForgetUsernameRequestDto) => Promise<void>
  resetPassword: (body: ResetPasswordRequestDto) => Promise<void>

  // user
  whoami: () => Promise<{ data: WhoamiResponseDto }>
  isValidUsername: (
    body: IsValidUsernameRequestDto
  ) => Promise<{ data: boolean }>
  updateUsername: (
    body: UpdateUsernameRequestDto
  ) => Promise<{ profile: WhoamiResponseDto | null }>
  updateProfile: (body: UpdateProfileRequestDto) => Promise<{ profile: WhoamiResponseDto | null }>
  updateProfilePicture: (
    body: FormData
  ) => Promise<{ profile: WhoamiResponseDto | null }>
}
