export type MyListFriendResponseDto = {
  friends: MyListFriendItemResponseDto[]
}

export type MyListFriendItemResponseDto = {
  userId: string
  username: string
  avatar: string
  isFriend: boolean
  numberOfMutualFriends: number
}
