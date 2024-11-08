import {
  AppURL,
  // BackendURL,
} from "@modules/core/presentation/endpoints/default.endpoints"

// USING BACKEND API
// TODO: change this later
// export const UserProfileAPI = `${BackendURL}/user/specific-user/`

// USING NEXT API
export const UserProfileNextAPI = `${AppURL}/api/user/get-user-by-id`
