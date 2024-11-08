// import { randomUUID } from "crypto"
// import { BaseEntity } from "src/common/entity"
//
// export class Device extends BaseEntity {
//   private props: {
//     userId: string
//     type: string
//     name: string
//     lastUsed: Date
//     userAgent: string
//     ipAddress: string
//     createdAt?: Date
//     updatedAt?: Date
//     deletedAt?: Date
//   }
//
//   constructor(
//     props: {
//       userId: string
//       type: string
//       name: string
//       lastUsed: Date
//       userAgent: string
//       ipAddress: string
//       createdAt?: Date
//       updatedAt?: Date
//       deletedAt?: Date
//     },
//     id?: string,
//   ) {
//     super()
//     this._id = id
//     this.props = props
//   }
//
//   get userId(): string {
//     return this.props.userId
//   }
//
//   get type(): string {
//     return this.props.type
//   }
//
//   get name(): string {
//     return this.props.name
//   }
//
//   get lastUsed(): Date {
//     return this.props.lastUsed
//   }
//
//   set lastUsed(dateTime: Date) {
//     this.props.lastUsed = dateTime
//   }
//   get userAgent(): string {
//     return this.props.userAgent
//   }
//   set userAgent(value: string) {
//     this.props.userAgent = value
//   }
//   get ipAddress(): string {
//     return this.props.ipAddress
//   }
//   set ipAddress(value: string) {
//     this.props.ipAddress = value
//   }
// }
