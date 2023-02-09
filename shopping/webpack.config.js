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
        port: 3000,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                cart: 'cart@http://localhost:3001/remoteEntry.js',
                products: 'products@http://localhost:3002/remoteEntry.js',
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
