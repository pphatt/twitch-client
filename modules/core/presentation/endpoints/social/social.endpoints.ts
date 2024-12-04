import { AppURL, BackendURL } from "../default.endpoints"

// USING BACKEND API
export const CreatePostAPI = `${BackendURL}/posts`
export const GetAllUserPostsAPI = `${BackendURL}/posts`

// USING NEXT API
export const NextCreatePostAPI = `${AppURL}/api/social/create-post`