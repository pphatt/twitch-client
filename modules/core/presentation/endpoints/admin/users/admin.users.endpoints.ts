import {
  AppURL,
  BackendURL,
  // BackendURL,
} from "@modules/core/presentation/endpoints/default.endpoints"

// USING BACKEND API
export const GetAllUsersAPI = `${BackendURL}/users`
export const GetUserDetailsAPI = `${BackendURL}/users/specific-user`

export const DeletedUserAPI = `${BackendURL}/users`

// USING NEXT API
export const NextGetAllUsersAPI = `${AppURL}/api/admin/users/get-all-users`
