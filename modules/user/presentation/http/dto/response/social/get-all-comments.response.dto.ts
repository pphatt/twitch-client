export type GetPostCommentsResponseDto = {
  comments: PostComment[]
}

export type PostComment = {
  id: string
  user: {
    id: string
    username: string
    image: {
      _url: string
    }
  }
  replies: PostComment[]
  content: string
  created: Date
}

// "comments": [
//   {
//     "user": {
//       "id": "2ba90741-7164-46e5-a9bf-2df4d21471dd",
//       "username": "admin2",
//       "image": {
//         "_id": "2245465a-fa44-4f88-9aa6-8115dad76ed8",
//         "_url": "https://res.cloudinary.com/di6qiyj4o/image/upload/v1732858709/image/user/avatar/2ba90741-7164-46e5-a9bf-2df4d21471dd/hfwrryuxyudij9wpeuy9.png",
//         "_publicId": "image/user/avatar/2ba90741-7164-46e5-a9bf-2df4d21471dd/hfwrryuxyudij9wpeuy9",
//         "_applicableId": "2ba90741-7164-46e5-a9bf-2df4d21471dd",
//         "_applicableType": "user",
//         "_imageType": "avatar",
//         "_createdAt": "2024-11-29T05:38:28.921Z",
//         "_updatedAt": "2024-11-29T05:38:28.924Z",
//         "_deletedAt": null
//       }
//     },
//     "content": "This is a great post!",
//     "replies": []
//   }
// ]
