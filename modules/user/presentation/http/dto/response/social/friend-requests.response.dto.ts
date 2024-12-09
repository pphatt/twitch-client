export type ListRequestFriendResponseDto = {
  friendRequests: ListRequestFriendItemResponseDto[]
}

export type ListRequestFriendItemResponseDto = {
  sender: {
    senderId: string,
    username: string,
    avatar: string
  }
  status: "PENDING" | "ACCEPTED"
  sentAt: Date
}
