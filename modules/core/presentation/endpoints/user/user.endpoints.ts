import {
  AppURL,
  BackendURL,
  // BackendURL,
} from "@modules/core/presentation/endpoints/default.endpoints"

// USING BACKEND API
export const WhoamiAPI = `${BackendURL}/users/who-am-i`
export const GetSpecificUserByName = `${BackendURL}/users/specific-user-by-name`
export const IsValidUsernameAPI = `${BackendURL}/users/is-valid-username`
export const UpdateUsernameAPI = `${BackendURL}/users/update-username`
export const UpdateDisplayNameAPI = `${BackendURL}/users/update-display-name`
export const UpdateBioAPI = `${BackendURL}/users/update-bio`
export const UpdateProfilePictureAPI = `${BackendURL}/users/profile-picture/add`
export const GetStreamKeyAPI = `${BackendURL}/users/get-stream-key`
export const SetStreamKeyAPI = `${BackendURL}/users/set-stream-key`

// USING NEXT API
export const NextWhoamiAPI = `${AppURL}/api/user/whoami`
export const NextUpdateUsernameAPI = `${AppURL}/api/user/update-username`
export const NextUpdateProfileAPI = `${AppURL}/api/user/update-profile`
export const NextUpdateProfilePictureAPI = `${AppURL}/api/user/update-picture`
export const NextGetStreamKeyAPI = `${AppURL}/api/user/get-stream-key`
export const NextSetStreamKeyAPI = `${AppURL}/api/user/set-stream-key`
export const NextSetViewerTokenAPI = `${AppURL}/api/user/set-viewer-token`
