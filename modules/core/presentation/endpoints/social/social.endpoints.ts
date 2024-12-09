import { AppURL, BackendURL } from "../default.endpoints"

// USING BACKEND API
export const PostAPI = `${BackendURL}/posts`
export const ViewPostAPI = `${BackendURL}/posts/view-post`
export const GetAllUserPostsAPI = `${BackendURL}/posts`
export const GetPostDetailsAPI = `${BackendURL}/posts/details`
export const ReactToPostAPI = `${BackendURL}/posts/react-to-post`
export const GetPostReactionAPI = `${BackendURL}/posts/reactions`
export const CreatePostCommentsAPI = `${BackendURL}/posts/comments`
export const GetPostCommentsAPI = `${BackendURL}/posts/all/comments`

export const GetUserFeedAPI = `${BackendURL}/posts/get/my-feed`

export const FollowUserAPI = `${BackendURL}/followers/follow`
export const UnFollowUserAPI = `${BackendURL}/followers/un-follow`
export const IsFollowUserAPI = `${BackendURL}/followers/is-follow`

export const AddFriendRequestAPI = `${BackendURL}/friends/send-request`
export const FriendStatusAPI = `${BackendURL}/friends/is-friend`

// USING NEXT API
export const NextCreatePostAPI = `${AppURL}/api/social/create-post`
export const NextUpdatePostAPI = `${AppURL}/api/social/edit-post`
export const NextDeletePostAPI = `${AppURL}/api/social/delete-post`
export const NextReactToPostAPI = `${AppURL}/api/social/post/react-to-post`
export const NextGetPostReactionAPI = `${AppURL}/api/social/post/get-post-reaction`
export const NextGetPostDetailsAPI = `${AppURL}/api/social/post/details`
export const NextCreatePostCommentsAPI = `${AppURL}/api/social/post/create-comment`

export const NextGetUserFeedAPI = `${AppURL}/api/social/post/get/my-feed`

export const NextFollowUserAPI = `${AppURL}/api/social/follow`
export const NextUnFollowUserAPI = `${AppURL}/api/social/un-follow`

export const NextAddFriendRequestAPI = `${AppURL}/api/social/friends/send-request`
