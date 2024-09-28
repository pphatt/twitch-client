import { BaseEntity } from "@modules/core/domain-base/entity/entity.base"
import type { User } from "@modules/core/domain-base/entity/identity/user.entity"

import type { ECategory } from "../enum/category.enum"

export class Category extends BaseEntity {
  protected _currentTotalView!: number
  protected _name!: string
  protected _slug!: string
  protected _image?: string
  protected _tagId?: string
  protected _applicableTo!: ECategory
  protected _applicableId!: string
  protected _users!: User[]

  get currentTotalView(): number {
    return this._currentTotalView
  }

  get name(): string {
    return this._name
  }

  get slug(): string {
    return this._slug
  }

  get image(): string | undefined {
    return this._image
  }

  get tagId(): string | undefined {
    return this._tagId
  }

  get applicableTo(): ECategory {
    return this._applicableTo
  }

  get applicableId(): string {
    return this._applicableId
  }

  get users(): User[] {
    return this._users
  }
}
