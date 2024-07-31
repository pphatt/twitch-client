import { withHydrationOverlay } from "@builder.io/react-hydration-overlay/next"
import million from "million/compiler"
import compose from "next-compose-plugins"

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 *
 * million.js new version using @million/lint instead of million/compiler. So if any unintentional errors happen, we can roll back
 */

/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: false,
      namespace: "Layout",
    },
  },
  webpack(config) {
    // Important: return the modified config
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
