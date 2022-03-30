
// import
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');




// export
module.exports = {
    //파일을 읽어들이기 시작하는 진입점 설정
    entry: './js/main.js',

    // 결과물(번들) 
    output : {
        // 디폴트 값들
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'main.js',
        clean: true
    },

    //번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정

    module: {
        rules: [
            {
                test: /\.s?css$/ ,
                use: 
                [         
                "style-loader",
                "css-loader",
                "postcss-loader",
                "sass-loader",

                //순서 중요
                ]
            },

            {
                test: /\.js$/ ,
                use: [
                    'babel-loader'
                ]
            }
        ]


    },

    plugins: [
        new HtmlWebpackPlugin({
            template : './index.html'
        }),
        new CopyWebpackPlugin({
            patterns : [
                { from : 'static'}
            ]
        })

    ],

    devServer: {
        host: 'localhost'
    }
}

