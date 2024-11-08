import { randomUUID } from "crypto"
import { BaseEntity } from "src/common/entity"

export class Permission extends BaseEntity {
  private _name: string
  private _description: string

  constructor(
    props: {
      name: string
      description: string
      createdAt?: Date
      updatedAt?: Date
      deletedAt?: Date
    },
    id?: string,
  ) {
    super()
    this._id = id ?? randomUUID()
    this._name = props.name
    this._description = props.description
    this._createdAt = props.createdAt ?? new Date()
    this._deletedAt = props.deletedAt
    this._updatedAt = props.updatedAt ?? new Date()
  }
  set name(value: string) {
    this._name = value
  }
  get name(): string {
    return this._name
  }
  get description(): string {
    return this._description
  }
  set description(value: string) {
    this._description = value
  }
}
