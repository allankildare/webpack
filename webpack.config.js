const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public' // insere o dist na pasta public
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache:true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        // funcao construtora
        new MiniCSSExtractPlugin({
            filename: "style.css"
        })
    ],
    module: {
        rules: [{
            // configuracao dos loaders
            test: /\.s?[ac]ss$/, // expressao regex
            use: [
                MiniCSSExtractPlugin.loader,
                // 'style-loader', // adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader'
            ]
        }]
    }
}