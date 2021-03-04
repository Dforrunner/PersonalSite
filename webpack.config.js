const path = require("path");
const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,

    entry: './mySite/src/index.js',

    output: {
        path: path.join(__dirname, '/mySite/static/scripts'),
        filename: "[name]-[hash].js",
        publicPath: '/static/scripts/'
    },

    optimization: {
        minimize: true,
    },

    plugins: [
        new Dotenv(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "/mySite/templates/template.html"),
            filename: path.join(__dirname, "/mySite/templates/index.html")
        }),
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