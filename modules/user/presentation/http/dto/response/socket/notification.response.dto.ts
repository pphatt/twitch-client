export type NotificationResponseDto = {
  notifications: NotificationItemResponseDto[]
}

export type NotificationItemResponseDto = {
  readonly message: string
  readonly senderName: string
  readonly data: string
  readonly senderAvatar: string
  readonly type: string
  readonly createdAt: Date
}

export type FriendNotificationResponseDto = {
  friends: FriendNotificationItemResponseDto[]
}

export type FriendNotificationItemResponseDto = {
  readonly name: string
  readonly avatar: string
  readonly status: "PENDING" | "ACCEPTED"
  readonly createdAt: Date
}
