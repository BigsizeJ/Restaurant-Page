const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: {
        main: './src/index.js',
        app: './src/app.js',
        home: './src/home.js',
        about: './src/about.js',
        contact: './src/contact.js',
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        assetModuleFilename: '[name][ext]',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        })
    ],
    devServer: {
        port: 3000,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.scss/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(svg|png|jpg|jpg|gif)/i,
                type: 'asset/resource'
            },
            {
                test: /\.(ttf|woff)/i,
                type: 'asset/resource'
            }
        ]
    }
}