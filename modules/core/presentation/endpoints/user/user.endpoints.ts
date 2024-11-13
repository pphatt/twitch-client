import {
  AppURL, BackendURL,
  // BackendURL,
} from "@modules/core/presentation/endpoints/default.endpoints"

// USING BACKEND API
export const WhoamiAPI = `${BackendURL}/users/who-am-i`

// USING NEXT API
export const NextWhoamiAPI = `${AppURL}/api/user/whoami`
