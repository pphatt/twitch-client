import { randomUUID } from "crypto"
import { BaseEntity } from "src/common/entity"

export class Role extends BaseEntity {
  private _name: string
  constructor(
    props: {
      name: string
      createdAt?: Date
      updatedAt?: Date
      deletedAt?: Date
    },
    id?: string,
  ) {
    super()
    ;(this._id = id ?? randomUUID()), (this.name = props.name)
    this._createdAt = props.createdAt ?? new Date()
    this._updatedAt = props.updatedAt ?? new Date()
    this._deletedAt = props.deletedAt
  }
  set name(value: string) {
    this._name = value
  }
  get name(): string {
    return this._name
  }
}
