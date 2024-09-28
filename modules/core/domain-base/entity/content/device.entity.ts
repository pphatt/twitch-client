import type { LoginHistory } from "@modules/core/domain-base/entity/content/login-history.entity"
import type { Token } from "@modules/core/domain-base/entity/content/token.entity"
import type { EDeviceType } from "@modules/core/domain-base/entity/enum/device-type.enum"

import { BaseEntity } from "../entity.base"
import type { User } from "../identity/user.entity"

export class Device extends BaseEntity {
  protected _userId!: string
  protected _type!: EDeviceType
  protected _name!: string
  protected _lastUsed!: Date
  protected _tokens!: Token[]
  protected _loginHistories!: LoginHistory[]
  protected _user!: User

  get userId(): string {
    return this._userId
  }

  get type(): EDeviceType {
    return this._type
  }

  get name(): string {
    return this._name
  }

  get lastUsed(): Date {
    return this._lastUsed
  }

  get tokens(): Token[] {
    return this._tokens
  }

  get loginHistories(): LoginHistory[] {
    return this._loginHistories
  }

  get user(): User {
    return this._user
  }
}
