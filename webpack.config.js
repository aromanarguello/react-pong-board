const path = require('path');

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        dev: './src/index.tsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js',
    },
    devServer: {
        compress: true,
        port: 3000,
        hot: true,
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            /**
             * Gets all .ts, .tsx, or .js files and runs them through eslint
             * and then transpiles them via babel.
             */
            {
              test: /(\.js$|\.tsx?$)/,
              exclude: /(node_modules|bower_components)/,
              use: ['babel-loader'],
            },
      
            /**
             * All output '.js' files will have any sourcemaps re-processed by
             * source-map-loader.
             */
            { test: /\.js$/, enforce: 'pre', loader: 'source-map-loader' },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
