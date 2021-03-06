const path = require("path");
const HWP = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "/src/index.js"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/public")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
  plugins: [
    new HWP({
      template: path.join(__dirname, "/src/index.html")
    })
  ]
};
