'use strict';
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules:[
            {
                test: /.js$/,
                use: 'babel-loader'         //解析 ES6
            },
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            // {
            //     test: /.(png|jpg|gif|jpeg)$/,
            //     use: 'file-loader'
            // },
            // {
            //     test: /.(woff|woff2|eot|ttf|otf)$/,             //字体匹配
            //     use: 'file-loader'
            // },
            {
                test: /.(png|jpg|gif|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10240
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',      
        hot: true
    }
}