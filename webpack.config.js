const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['eslint-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js'],
    },
    output: {
        path: `${__dirname}/dist`,
        publicPath: '/',
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
    },
}
