const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.css/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                use: [
                    'style-loader',   //将css-loader解析的结果转变成js代码，运行时插入 style 标签
                    'css-loader'      //负责解析css，主要是处理css中的依赖，例如 @import 和 url() 等引用申明
                ]
            },
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                user: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            },
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],     //转换规则
                    },
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin(),  //在dist目录下产生默认模板index.htmlindex.html
        new HtmlWebpackPlugin({
            filename: 'test.html',
            template: 'src/index.html',
        })
    ],
    //webpack-dev-server配置
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')  //开发服务器启动路径
    },
    //webpack 依赖 enhanced-resolve 来解析代码模块的路径, enhanced-resolve 是node的路径解析规则增强版
    resolve: {      // 配置可以支持自定义哪些解析路径规则
        modules: [
            //path.resolve(__dirname, 'node_modules'), // 指定当前目录下的 node_modules 优先查找
            //'node_modules', // 如果有一些类库是放在一些奇怪的地方的，你可以添加自定义的路径或者目录
        ],
    }
}