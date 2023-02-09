const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    entry: "/src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    mode: "development",
    devServer: {
        port: 3002,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/index',
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node-modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", ["@babel/preset-react", {"runtime": "automatic"}]],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    }
};
