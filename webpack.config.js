// import webpack from "webpack";
// import path from "path";
// import HtmlWebpackPlugin from "html-webpack-plugin";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const isProduction = process.env.NODE_ENV === "production";
// const ASSET_PATH = process.env.ASSET_PATH || "/";
// const __dirname = path.dirname(__filename);

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  target: "node",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3000,
  },
  module: {
    // exclude node_modules
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  // pass all js files through Babel
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
  },
};

// const config = {
//   entry: path.join(__dirname, "src", "index.tsx"),
//   target: "node",
//   output: {
//     filename: "main.js",
//     path: path.resolve(__dirname, "dist"),
//     publicPath: ASSET_PATH,
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.join(__dirname, "src", "index.html"),
//     }),
//     new webpack.DefinePlugin({
//       "process.env.ASSET_PATH": JSON.stringify(ASSET_PATH),
//     }),
//   ],
//   resolve: {
//     extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
//   },
//   module: {
//     rules: [
//       { test: /\.txt$/, use: "raw-loader" },
//       {
//         test: /\.tsx?$/,
//         use: "ts-loader",
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.s[ac]ss$/i,
//         use: [
//           // Creates `style` nodes from JS strings
//           "style-loader",
//           // Translates CSS into CommonJS
//           "css-loader",
//           // Compiles Sass to CSS
//           "sass-loader",
//         ],
//       },
//       {
//         test: /\.(png|jpe?g|gif)$/i,
//         use: [
//           {
//             loader: "file-loader",
//           },
//         ],
//       },
//       {
//         test: /\.html$/i,
//         loader: "html-loader",
//       },
//     ],
//   },
// };

// if (isProduction) {
//   config.mode = "production";
// } else {
//   config.mode = "development";
// }
