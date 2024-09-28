import type { Category } from "@modules/core/domain-base/entity/content/category.entity"
import type { Device } from "@modules/core/domain-base/entity/content/device.entity"
import type { Token } from "@modules/core/domain-base/entity/content/token.entity"

import type { ExternalLink } from "../content/external-links.entity"
import type { LoginHistory } from "../content/login-history.entity"
import { BaseEntity } from "../entity.base"

export class User extends BaseEntity {
  protected _categoryId!: string
  protected _name!: string
  protected _displayName!: string
  protected _slug!: string
  protected _email!: string
  protected _password!: string
  protected _phoneNumber!: string
  protected _dob!: Date
  protected _emailVerified!: boolean
  protected _phoneVerified!: boolean
  protected _isLive!: boolean
  protected _view!: number
  protected _bio?: string
  protected _avatar?: string
  protected _thumbnail?: string
  protected _lastUsernameChangeAt?: Date
  protected _externalLinks!: ExternalLink[]
  protected _devices!: Device[]
  protected _tokens!: Token[]
  protected _loginHistories!: LoginHistory[]
  protected _category!: Category

  get categoryId(): string {
    return this._categoryId
  }

  get name(): string {
    return this._name
  }

  get displayName(): string {
    return this._displayName
  }

  get slug(): string {
    return this._slug
  }

  get email(): string {
    return this._email
  }

  get password(): string {
    return this._password
  }

  get phoneNumber(): string {
    return this._phoneNumber
  }

  get dob(): Date {
    return this._dob
  }

  get emailVerified(): boolean {
    return this._emailVerified
  }

  get phoneVerified(): boolean {
    return this._phoneVerified
  }

  get isLive(): boolean {
    return this._isLive
  }

  get view(): number {
    return this._view
  }

  get bio(): string | undefined {
    return this._bio
  }

  get avatar(): string | undefined {
    return this._avatar
  }

  get thumbnail(): string | undefined {
    return this._thumbnail
  }

  get lastUsernameChangeAt(): Date | undefined {
    return this._lastUsernameChangeAt
  }

  get externalLinks(): ExternalLink[] {
    return this._externalLinks
  }

  get devices(): Device[] {
    return this._devices
  }

  get tokens(): Token[] {
    return this._tokens
  }

  get loginHistories(): LoginHistory[] {
    return this._loginHistories
  }

  get category(): Category {
    return this._category
  }
}
