/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Legal pages use ASCII slugs; keep the spelling with "ñ" working too.
      // Next matches the encoded path, so the source spells "ñ" as %C3%B1.
      {
        source: "/:document(privacy|terms)/due%C3%B1os-del-sillon",
        destination: "/:document/duenos-del-sillon",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
