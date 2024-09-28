import type { Device } from "@modules/core/domain-base/entity/content/device.entity"
import { BaseEntity } from "@modules/core/domain-base/entity/entity.base"

import type { User } from "../identity/user.entity"

export class Token extends BaseEntity {
  protected _userId!: string
  protected _deviceId!: string
  protected _token!: string
  protected _expiresAt!: Date
  protected _user!: User
  protected _device!: Device

  get userId(): string {
    return this._userId
  }

  get deviceId(): string {
    return this._deviceId
  }

  get token(): string {
    return this._token
  }

  get expiresAt(): Date {
    return this._expiresAt
  }

  get user(): User {
    return this._user
  }

  get device(): Device {
    return this._device
  }
}
