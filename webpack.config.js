const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require('path')
const glob = require('glob');
const PurgecssPlugin = require('purgecss-webpack-plugin')


const PATHS = {
    src: path.join(__dirname, 'src')
}


module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /nodule_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },

        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
            canPrint: true
        }),
        new PurgecssPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
        })
    ]
}