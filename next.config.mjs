import million from "million/compiler"
import { withHydrationOverlay } from "@builder.io/react-hydration-overlay/next";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 *
 * million.js new version using @million/lint instead of million/compiler. So if any unintentional errors happen, we can roll back
 */
await import("./env.js")

/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  webpack(config) {
    // Important: return the modified config
    return config
  },
}

const plugins = []
const pluginOptions = [
  {
    id: "million",
    options: {
      // new version using -> rsc: true
      auto: true,
    },
  },
  {
    id: "mismatch-hydration",
    options: {
      appRootSelector: "main",
    },
  },
]

plugins.push({ id: "million", plugin: million.next })
plugins.push({ id: "mismatch-hydration", plugin: withHydrationOverlay });

export default () => {
  return plugins.reduce((acc, curr) => {
    const options = pluginOptions.find(({ id }) => curr.id === id)

    if (options && Object.keys(options).length > 0) {
      // new version using -> curr.plugin(options.options)(acc)
      return curr.plugin(acc, options.options)
    }

    return curr.plugin(acc)
  }, nextConfig)
}
