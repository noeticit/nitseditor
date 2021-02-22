const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/components'),
            NitsComponents : path.resolve( 'resources/components')
        },
    },
};


// .webpackConfig({
//     output: {
//         chunkFilename: 'nits-assets/chunks/[name].[contenthash].js'
//     },
//     devServer: {
//         inline: false
//     },
//     resolve: {
//         symlinks: false,
//         alias: {
//             // NitsModels: path.resolve( '@noeticit/nitseditor-frontend/Models'),
//             // NitsComponents: path.resolve( '@noeticit/nitseditor-frontend/Components'),
//             NitsPages: path.resolve( './resources/pages'),
//             ProjectModels: path.resolve('./resources/models'),
//         },
//     }
// })
