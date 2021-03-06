const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.js'
    },
    mode: 'development',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, exclude: '/node_modules/', use: 'babel-loader'},
            {test: /\.css$/, use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    hmr: process.env.NODE_ENV === 'development',
                  },
                },
                'css-loader', ]
            }, 
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'css/style.css',
        }),
        new HtmlWebpackPlugin({  // Also generate a test.html
          filename: 'index.html',
          template: 'src/index.html'
        })
    ]
}