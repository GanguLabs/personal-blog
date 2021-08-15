module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
    "next/babel",
  ],
  plugins: ["@babel/plugin-transform-runtime"],
};

// module.exports = {
//   env: {
//     development: {
//       compact: false,
//       presets: [
//         "@babel/preset-env",
//         "@babel/preset-react",
//         "@babel/preset-typescript",
//         "next/babel",
//       ],
//     },
//     production: {
//       presets: [
//         "@babel/preset-env",
//         "@babel/preset-react",
//         "@babel/preset-typescript",
//         "next/babel",
//       ],
//       plugins: ["@babel/plugin-transform-runtime"],
//     },
//     test: {
//       presets: [
//         [
//           "next/babel",
//           {
//             "preset-env": {
//               modules: "commonjs",
//             },
//           },
//         ],
//       ],
//     },
//   },
// };
