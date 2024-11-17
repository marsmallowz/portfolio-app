import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix:
    process.env.NODE_ENV === "development"
      ? undefined
      : "https://alsandymaulana.com",
  async headers() {
    return [
      {
        source: "/projects/*",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=60, s-maxage=600, stale-while-revalidate=14400, stale-if-error=14400",
          },
        ],
      },
    ];
  },
};

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

const withMDX = createMDX({
  experimental: {
    mdxRs: true,
  },
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
