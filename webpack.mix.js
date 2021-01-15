const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/nits-assets/js')
    .postCss('./resources/sass/app.css', 'public/nits-assets/css', [
        require("tailwindcss"),
    ])
    .webpackConfig({
        output: {
            chunkFilename: 'nits-assets/chunks/[name].[contenthash].js'
        },
        resolve: {
            symlinks: false,
            alias: {
                NitsModels: path.resolve( './resources/models/Models'),
                NitsComponents: path.resolve( './resources/demo/Components'),
                NitsPages: path.resolve( './resources/pages'),
                ProjectModels: path.resolve('./resources/models'),
            },
        }
    })
    .sourceMaps().version();
