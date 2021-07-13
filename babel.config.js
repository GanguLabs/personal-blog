module.exports = {
  env: {
    development: {
      compact: false,
      presets: ["next/babel"],
    },
    production: {
      presets: ["next/babel"],
    },
    test: {
      presets: [
        [
          "next/babel",
          {
            "preset-env": {
              modules: "commonjs",
            },
          },
        ],
      ],
    },
  },
};