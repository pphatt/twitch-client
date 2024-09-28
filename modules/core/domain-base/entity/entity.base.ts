export class BaseEntity {
  protected _id!: string
  protected _createdAt!: Date
  protected _updatedAt!: Date
  protected _deletedAt!: Date

  get id(): string {
    return this._id
  }

  get createdAt(): Date {
    return this._createdAt
  }

  get updatedAt(): Date {
    return this._updatedAt
  }

  get deletedAt(): Date {
    return this._deletedAt
  }
}
