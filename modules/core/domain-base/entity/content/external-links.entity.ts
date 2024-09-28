import { BaseEntity } from "../entity.base"
import type { User } from "../identity/user.entity"

export class ExternalLink extends BaseEntity {
  protected _title!: string
  protected _url!: string
  protected _userId!: string
  protected _user!: User

  get title(): string {
    return this._title
  }

  get url(): string {
    return this._url
  }

  get userId(): string {
    return this._userId
  }

  get user(): User {
    return this._user
  }
}
