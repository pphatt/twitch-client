import type { BaseEntity } from "../../../core/domain-base/entity/entity.base"

export class UserDto implements BaseEntity {
  // id             String    @id @default(uuid())
  // categoryId     String
  // name           String
  // slug           String
  // email          String    @unique
  // password       String
  // phoneNumber    String
  // dob            DateTime
  // emailVerified  Boolean   @default(false)
  // phoneVerified  Boolean   @default(false)
  // isLive         Boolean   @default(false)
  // view           Int       @default(0)
  // bio            String?
  // avatar         String?
  // thumbnail      String?
  // createdAt      DateTime @default(now())
  // updatedAt      DateTime @default(now()) @updatedAt
  // deletedAt      DateTime?
}
