const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MyWebpackPlugin = require("./plugins/my-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve("./src/index.js"),
    output: {
        filename: "[name].js",
        path: path.resolve("./build"),
        chunkFilename: "[name].[chunkhash:8].js",
    },
    resolve: {
        extensions: [".js"],
    },
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin(), new MyWebpackPlugin({ a: 1 })],
    optimization: {
        usedExports: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["./loaders/console"],
            },
            {
                test: /\.text$/,
                exclude: /node_modules/,
                loader: "./loaders/raw-loader?a=1",
            },
        ],
    },
};
