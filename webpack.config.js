const mix = require('laravel-mix');
const ASSET_URL = mix.inProduction() ? process.env.MIX_ASSET_URL: '/';
const path = require('path');
const webpack = require('webpack');

module.exports = {
    output: {
        chunkFilename: 'nits-assets/chunks/[name].[contenthash].js',
        publicPath: ASSET_URL
    },
    resolve: {
        symlinks: false,
        alias: {
            '@': path.resolve('resources/components'),
            NitsModels: path.resolve('resources/models'),
            NitsPages: path.resolve( './resources/pages'),
        },
    },
    plugins:[
        new webpack.DefinePlugin({
            "process.env.ASSET_PATH": process.env.MIX_ASSET_URL
        })
    ]
};
