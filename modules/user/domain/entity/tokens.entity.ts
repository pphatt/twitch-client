import { randomUUID } from "crypto"
import { BaseEntity } from "src/common/entity"

export class Token extends BaseEntity {
  private props: {
    userId: string
    deviceId: string
    token: string
    expiresAt: Date
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
  }

  constructor(
    props: {
      userId: string
      deviceId: string
      token: string
      expiresAt: Date
      createdAt?: Date
      updatedAt?: Date
      deletedAt?: Date
    },
    id?: string,
  ) {
    super()
    this.props = props
    this._id = id
  }

  get userId(): string {
    return this.props.userId
  }

  get deviceId(): string {
    return this.props.deviceId
  }

  get token(): string {
    return this.props.token
  }

  get expiresAt(): Date {
    return this.props.expiresAt
  }

  // Method to check if the token is expired
  isExpired(): boolean {
    return new Date() > this.props.expiresAt
  }
}
