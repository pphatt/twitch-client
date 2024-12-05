import { AppURL, BackendURL } from "../default.endpoints"

// USING BACKEND API
export const CreatePostAPI = `${BackendURL}/posts`
export const DeletePostsAPI = `${BackendURL}/posts`
export const GetAllUserPostsAPI = `${BackendURL}/posts`
export const GetPostDetailsAPI = `${BackendURL}/posts/details`

// USING NEXT API
export const NextCreatePostAPI = `${AppURL}/api/social/create-post`
export const NextDeletePostAPI = `${AppURL}/api/social/delete-post`
export const NextGetPostDetailsAPI = `${AppURL}/api/social/post/details`
