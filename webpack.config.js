const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    mode: "development",
    entry: path.resolve("./src/index.js"),
    output: {
        filename: "[name].js",
        path: path.resolve("./dist"),
        chunkFilename: "[name].[chunkhash:8].js",
    },
    resolve: {
        extensions: [".js"],
    },
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
    devServer: {
        progress: true,
        contentBase: path.resolve("./dist"),
        historyApiFallback: true,
        port: 8080,
        clientLogLevel: "none",
        stats: { children: false },
        overlay: true,
    },
};
