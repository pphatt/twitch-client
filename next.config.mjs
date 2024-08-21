import { createHash } from "node:crypto"
import path from "node:path"
import { withHydrationOverlay } from "@builder.io/react-hydration-overlay/next"
import million from "million/compiler"
import compose from "next-compose-plugins"

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 *
 * million.js new version using @million/lint instead of million/compiler. So if any unintentional errors happen, we can roll back
 */

const getHash = (source, length) =>
  createHash("shake256", { outputLength: length }).update(source).digest("hex")

/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: false,
      pure: true,
      namespace: "Layout",
    },
  },
  webpack(config, { dev }) {
    // Important: return the modified config
    // define class names generated by css-modules
    config.module.rules
      .find(({ oneOf }) => !!oneOf)
      .oneOf.filter(({ use }) => JSON.stringify(use)?.includes("css-loader"))
      .reduce((acc, { use }) => acc.concat(use), [])
      .forEach(({ options }) => {
        if (options?.modules) {
          options.modules.getLocalIdent = (
            { resourcePath },
            localIdentName,
            localName
          ) => {
            const { name } = path.parse(resourcePath)
            const moduleName = name.replace(/\.module/g, "").replace(/\./g, "-")
            return dev
              ? `Sc-${localName}__${getHash(resourcePath, 4)}`
              : `_${getHash(`${resourcePath}${localName}`, 4)}`
          }
        }
      })

    return config
  },
}

export default compose.withPlugins(
  [
    [million.next, {}],
    [withHydrationOverlay, {}],
  ],
  nextConfig
)

// import MillionLint from '@million/lint';
// import { withHydrationOverlay } from "@builder.io/react-hydration-overlay/next";
// import million from "million/compiler";
// import compose from "next-compose-plugins";
//
// /**
//  * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
//  * for Docker builds.
//  *
//  * million.js new version using @million/lint instead of million/compiler. So if any unintentional errors happen, we can roll back
//  */
//
// /** @type {import("next").NextConfig} */
// const nextConfig = {
//   experimental: {
//     optimizeCss: true
//   },
//   compiler: {
//     styledComponents: {
//       ssr: true,
//       displayName: false,
//       namespace: "Layout"
//     }
//   },
//   webpack(config) {
//     // Important: return the modified config
//     return config;
//   }
// };
// export default MillionLint.next({
//   rsc: true
// })(compose.withPlugins([[million.next, {}], [withHydrationOverlay, {}]], nextConfig));
