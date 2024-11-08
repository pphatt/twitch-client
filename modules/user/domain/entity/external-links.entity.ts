import { BaseEntity } from "src/common/entity"

export class ExternalLink extends BaseEntity {
  private props: {
    title: string
    url: string
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
  }
  constructor(
    props: {
      title: string
      url: string
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
}
