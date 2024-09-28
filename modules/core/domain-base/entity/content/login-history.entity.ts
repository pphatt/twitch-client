import type { Device } from "@modules/core/domain-base/entity/content/device.entity"
import { BaseEntity } from "@modules/core/domain-base/entity/entity.base"
import type { User } from "@modules/core/domain-base/entity/identity/user.entity"

export class LoginHistory extends BaseEntity {
  protected _userId!: string
  protected _deviceId!: string
  protected _loginAt!: Date
  protected _ipAddress!: string
  protected _loginStatus!: boolean
  protected _reason?: string
  protected _user!: User
  protected _device!: Device

  get userId(): string {
    return this._userId
  }

  get deviceId(): string {
    return this._deviceId
  }

  get loginAt(): Date {
    return this._loginAt
  }

  get ipAddress(): string {
    return this._ipAddress
  }

  get loginStatus(): boolean {
    return this._loginStatus
  }

  get reason(): string | undefined {
    return this._reason
  }

  get user(): User {
    return this._user
  }

  get device(): Device {
    return this._device
  }
}
