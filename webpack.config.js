const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    //entry: './src/index.js',//唯一入口文件
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        //filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval-source-map',//生成Source Maps,这里选择eval-source-map
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './src/index.html', // 源模板文件
            filename: 'index.html', // 输出文件【注意：这里的根路径是module.exports.output.path】
            showErrors: true,
            //inject: 'body',
            //chunks: ["common",'index']
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|tff|otf)$/,
                use: [
                    'url-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: "babel-loader"
            }
        ]
    }
};
