const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    mode: "production",
    entry: path.resolve("./src/index.js"),
    output: {
        filename: "[name].js",
        path: path.resolve("./build"),
        chunkFilename: "[name].[chunkhash:8].js",
    },
    resolve: {
        extensions: [".js"],
    },
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
    optimization: {
        usedExports: true,
    },
};
