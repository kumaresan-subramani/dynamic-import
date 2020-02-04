const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  mode: "development",
  node: {
    __dirname: true
  },
  entry: {
    "src/app/bundle": "./src/app/index.ts"
  },
  output: {
    publicPath: "/js/",
    filename: "src/app/bundle.js"
  },
  devtool: "none",
  module: {
    rules: [
      {
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: [".ts", ".js"]
  }
};
