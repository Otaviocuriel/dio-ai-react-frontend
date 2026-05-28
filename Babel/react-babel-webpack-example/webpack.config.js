const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "..", "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        babelrc: false,
                        configFile: false,
                        presets: [
                            ["@babel/preset-env", { modules: "commonjs" }],
                            ["@babel/preset-react", { runtime: "automatic" }],
                        ],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "..", "public", "index.html"),
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
        modules: [path.resolve(__dirname, "node_modules"), "node_modules"],
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 3000,
    },
};