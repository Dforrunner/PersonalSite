var path = require("path");
const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: __dirname,

  entry: './mySite/src/index.js',

  output: {
      path: path.join(__dirname, '/mySite/static/mySite/scripts/'),
      filename: "main.js",
  },

  plugins: [
      new Dotenv(),
      new UglifyJsPlugin(),
      new BundleAnalyzerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }

};