import { randomUUID } from "crypto"
import { BaseEntity } from "src/common/entity"

export class LoginHistory extends BaseEntity {
  private props: {
    userId: string
    deviceId: string
    loginAt: Date
    loginStatus: boolean
    reason?: string
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
  }

  constructor(
    props: {
      userId: string
      deviceId: string
      loginAt: Date
      loginStatus: boolean
      reason?: string
      createdAt?: Date
      updatedAt?: Date
      deletedAt?: Date
    },
    id?: string,
  ) {
    super()
    this._id = id
    this.props = props
  }

  get userId(): string {
    return this.props.userId
  }

  get deviceId(): string {
    return this.props.deviceId
  }

  get loginAt(): Date {
    return this.props.loginAt
  }

  get loginStatus(): boolean {
    return this.props.loginStatus
  }

  get reason(): string | undefined {
    return this.props.reason
  }

  // Additional methods to manage login history specifics
}
