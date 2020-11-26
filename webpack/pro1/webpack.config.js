const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname,"./dist1")
    },
    mode: "production",
    module:{
        rules:[
            {

            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title:"My App",
            filename: "app.html",
            template: "./src/index.html"
        })
    ]
    
}