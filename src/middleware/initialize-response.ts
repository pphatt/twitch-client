import {
  NextResponse,
  type NextFetchEvent,
  type NextRequest,
} from "next/server"
import type { CustomMiddleware } from "@/middleware/chain"

export function withInitializeResponse(middleware: CustomMiddleware) {
  return async (
    request: NextRequest,
    event: NextFetchEvent,
  ) => {
    const initializeResponseInChain = NextResponse.next()

    return middleware(request, event, initializeResponseInChain)
  }
}
