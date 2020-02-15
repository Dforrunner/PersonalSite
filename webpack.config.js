var path = require("path");
const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var BundleTracker = require('webpack-bundle-tracker');


module.exports = {
    context: __dirname,

    entry: './mySite/src/index.js',

    output: {
        path: path.join(__dirname, '/mySite/static/mySite/scripts'),
        filename: "[name]-[hash].js",
        publicPath: '/static/mySite/scripts/'
    },
    plugins: [
        new Dotenv(),
        new UglifyJsPlugin(),
        new BundleTracker({
            filename: './webpack-stats.json'
        }),
        new CleanWebpackPlugin(),
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