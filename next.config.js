/** @type {import('next').NextConfig} */
const nextConfig = {
  mdxRs: true,
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
