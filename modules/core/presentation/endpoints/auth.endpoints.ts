import { AppURL, BackendURL } from "./default.endpoints"

// USING BACKEND API
export const SignInAPI = `${BackendURL}/auth/sign-in`
export const RefreshTokenAPI = `${BackendURL}/auth/refresh-token`

// USING NEXT API
export const NextSignInAPI = `${AppURL}/api/auth/sign-in`
