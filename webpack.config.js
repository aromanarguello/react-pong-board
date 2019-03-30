const path = require('path');

module.exports = {
    entry: {
        dev: "./src/index.tsx",
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    devServer: {
        compress: true,
        port: 3000,
        hot: true,
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    module: {
        rules: [
            // Typescript
            {
                test: /\.(ts|tsx)$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
            },
        ],
    },
};