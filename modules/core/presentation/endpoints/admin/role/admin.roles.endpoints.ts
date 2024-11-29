import {
  AppURL,
  BackendURL,
  // BackendURL,
} from "@modules/core/presentation/endpoints/default.endpoints"

// USING BACKEND API
export const GetAllRolesAPI = `${BackendURL}/users/role`

// USING NEXT API
export const NextGetAllRolesAPI = `${AppURL}/api/admin/roles/get-all-roles`
