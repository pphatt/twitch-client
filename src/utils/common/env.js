import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

console.log("> Validating environment variables...")

export const env = createEnv({
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
    NEXT_PUBLIC_APP_URL: z.string(),
    NEXT_PUBLIC_BACK_END_API_URL: z.string(),
  },
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    DISABLE_BROWSER_LOGS: z.boolean().optional(),
    ENABLE_MILLION_JS: z.boolean().optional(),
    // ENABLE_PATTY_CAKE: z.boolean(),
  },
  runtimeEnv: {
    // client
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_BACK_END_API_URL: process.env.NEXT_PUBLIC_BACK_END_API_URL,

    // server
    NODE_ENV: process.env.NODE_ENV,
    DISABLE_BROWSER_LOGS: process.env.DISABLE_BROWSER_LOGS,
    ENABLE_MILLION_JS: process.env.ENABLE_MILLION_JS,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
})
