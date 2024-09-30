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
    response: NextResponse
  ) => {
    const intializeResponseInChain = NextResponse.next()

    return middleware(request, event, intializeResponseInChain)
  }
}
