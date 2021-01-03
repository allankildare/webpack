const webpack = require('webpack')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public' // insere o dist na pasta public
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