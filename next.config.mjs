import million from 'million/compiler';
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./env.js");

/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true
  }
};

const millionConfig = {
  auto: { rsc: true },
}

// initiate million.js bundle
export default million.next(nextConfig, millionConfig);
