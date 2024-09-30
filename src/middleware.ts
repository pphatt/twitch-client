import { chain } from "@/middleware/chain"
import { withInitializeResponse } from "@/middleware/initialize-response"
import { withAuth } from "@/middleware/with-auth"

export default chain([withInitializeResponse, withAuth])

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
