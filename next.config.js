module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/sounds/",
          outputPath: "static/sounds/",
          name: "[name].[ext]",
          esModule: false,
        },
      },
    });

    return config;
  },
  reactStrictMode: true,
};

const withTM = require("next-transpile-modules")(["three"]);
module.exports = withTM();
