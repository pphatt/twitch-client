import {
  AppURL,
  BackendURL,
  // BackendURL,
} from "@modules/core/presentation/endpoints/default.endpoints"

// USING BACKEND API
export const WhoamiAPI = `${BackendURL}/users/who-am-i`
export const IsValidUsernameAPI = `${BackendURL}/users/is-valid-username`
export const UpdateUsernameAPI = `${BackendURL}/users/update-username`

// USING NEXT API
export const NextWhoamiAPI = `${AppURL}/api/user/whoami`
export const NextUpdateUsernameAPI = `${AppURL}/api/user/update-username`
