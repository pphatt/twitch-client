import type { tokenType } from "@/constants/enum"
import { type JwtPayload } from "jwt-decode"

export interface TokenPayload extends JwtPayload {
  sub?: string
  email?: string
  username?: string
  deviceId?: string
  userAgent?: string
  role?: string[]
  permission?: string[]
  tokenType: tokenType
}
