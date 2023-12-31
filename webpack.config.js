const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

console.log("test");

module.exports = {
  entry: "./client/index.js",

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./client/index.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      // {
      //   test: /\.s[ac]ss$/i,
      //   exclude: /node_modules/,
      //   use: ["style-loader", "css-loader", "sass-loader"],
      // },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  devServer: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
};
