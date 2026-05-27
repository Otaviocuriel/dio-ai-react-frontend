const path = require ("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports ={

    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),

        filename:"bundle.js",

    },

    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,

                exclude: /node_modules/,

                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html")
        })
    ],
    resolve:{
        extensions:[".js",".jsx"]
    },
    devServer:{
        static:{
            directory: path.resolve(__dirname, "dist")
        },
        port: 3000,
    },
};
