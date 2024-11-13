import { AppURL, BackendURL } from "../default.endpoints"

// USING BACKEND API
export const SignUpWithEmailAPI = `${BackendURL}/auth/signup-with-email`
// export const SignUpWithPhoneAPI = `${BackendURL}/auth/signup-with-phone`
export const SignInAPI = `${BackendURL}/auth/sign-in`
export const RefreshTokenAPI = `${BackendURL}/auth/refresh-token`
// export const Toggle2FaAPI = `${BackendURL}/auth/toggle-2-fa`
export const ConfirmEmailAPI = `${BackendURL}/auth/confirm-email`
export const ResendConfirmEmailAPI = `${BackendURL}/auth/resend-confirm-email`
export const ForgotPasswordAPI = `${BackendURL}/auth/forgot-password`
export const ForgetUsername = `${BackendURL}/auth/forget-username`
export const ResetPasswordAPI = `${BackendURL}/auth/reset-password`
// export const LogoutFromAllDeviceAPI = `${BackendURL}/auth/logout-from-all-device`
export const LogoutAPI = `${BackendURL}/auth/logout`
// export const LogoutFromSpecificDeviceAPI = `${BackendURL}/auth/logout`

// USING NEXT API
export const NextSignInAPI = `${AppURL}/api/auth/sign-in`
export const NextRefreshTokenAPI = `${AppURL}/api/auth/refresh-token`
export const NextResetPasswordAPI = `${AppURL}/api/auth/reset-password`
export const NextLogoutAPI = `${AppURL}/api/auth/logout`
