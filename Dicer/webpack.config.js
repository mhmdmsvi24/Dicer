const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const loader = require("sass-loader");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        use : [
          {
            loader: "file-loader"
          }
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Dicer",
      filename: "index.html",
      template: "src/template.html",
    }),
    // new BundleAnalyzerPlugin(),
  ],
};
