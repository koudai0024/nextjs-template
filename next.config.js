/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")

module.exports = {
  reactStrictMode: true,
  typescript: { ignoreDevErrors: true },
  poweredByHeader: false,
  webpack(config) {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  },
};
