import { AppURL, BackendURL } from "../default.endpoints"

// USING BACKEND API
export const PostAPI = `${BackendURL}/posts`
export const ViewPostAPI = `${BackendURL}/posts/view-post`
export const GetAllUserPostsAPI = `${BackendURL}/posts`
export const GetPostDetailsAPI = `${BackendURL}/posts/details`
export const CreatePostCommentsAPI = `${BackendURL}/posts/comments`
export const GetPostCommentsAPI = `${BackendURL}/posts/all/comments`

// USING NEXT API
export const NextCreatePostAPI = `${AppURL}/api/social/create-post`
export const NextUpdatePostAPI = `${AppURL}/api/social/edit-post`
export const NextDeletePostAPI = `${AppURL}/api/social/delete-post`
export const NextGetPostDetailsAPI = `${AppURL}/api/social/post/details`
export const NextCreatePostCommentsAPI = `${AppURL}/api/social/post/create-comment`
