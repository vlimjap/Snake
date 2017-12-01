const AssetsPlugin = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV =! 'development';
const pathsToClean = ['dist'];

let conf = {
    entry: {
        site: './src/js/index.js',
        style: './src/sass/site.scss'
    },
    output: {
        filename: 'site.bundle.js',
        path: path.resolve(__dirname, 'dist'),

    },
    module: {
        rules: [{
            test: /\.(css|scss)$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: false,
                        sourceMap: !isProduction
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: !isProduction
                    }
                }],
                // use style-loader in development
                fallback: 'style-loader'
            })
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        },
        {
            test: /\.(js|jsx)?$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'stage-2', 'es2015'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        }
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './public/html' },
            { from: './public/i', to: 'i' },
        ])
    ]
};

conf.output.filename = 'js/[name].js';
conf.watchOptions = {
    ignored: /node_modules/,
    poll: true
};
conf.plugins.push(new ExtractTextPlugin('css/site.css'));
conf.plugins.push(new AssetsPlugin());
conf.plugins.push(new webpack.optimize.UglifyJsPlugin());
conf.plugins.push(new CleanWebpackPlugin(pathsToClean, {
    root:     path.resolve(__dirname),
    verbose:  true,
    dry:      false
}));

module.exports = conf;