const nextConfig = {};

const withPWA =
  process.env.NODE_ENV === "production"
    ? require("next-pwa")({
        dest: "public",
      })
    : {};

module.exports = {
  ...nextConfig,
  ...withPWA,
  experimental: {
    serverActions: true,
  },
};
