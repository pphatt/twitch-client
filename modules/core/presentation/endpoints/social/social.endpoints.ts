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
export const UnfriendRequestAPI = `${BackendURL}/friends`

export const AcceptFriendRequestAPI = `${BackendURL}/friends/accept`
export const RejectFriendRequestAPI = `${BackendURL}/friends/reject`

export const FriendStatusAPI = `${BackendURL}/friends/is-friend`

export const GetMyFriendRequestListAPI = `${BackendURL}/friends/friend-requests`
export const GetMyListFriendAPI = `${BackendURL}/friends/my-list-friend`

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
export const NextUnfriendRequestAPI = `${AppURL}/api/social/friends/un-friend`

export const NextAcceptFriendRequestAPI = `${AppURL}/api/social/friends/accept-friend`
export const NextRejectFriendRequestAPI = `${AppURL}/api/social/friends/reject-friend`

export const NextGetMyFriendRequestListAPI = `${AppURL}/api/social/friends/friend-requests`
export const NextGetMyListFriendAPI = `${AppURL}/api/social/friends/my-list-friend`
