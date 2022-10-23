const path = require("path");
const resolve = dir => {
  return path.join(__dirname, dir);
};
module.exports = {
  publicPath: process.env.NODE_ENV === 'development'
    ? '/'
    : '/',
  assetsDir:'static',
  pages: {
    index: {
      // entry for the page
      entry: 'src/entry/entryClient.js',
      // the source template
      template: 'public/index.html',
      // // output as dist/index.html
      filename: 'index.html',
      // // when using title option,
      // // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Client Page',
      // // chunks to include on this page, by default includes
      // // extracted common chunks and vendor chunks.
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    cli: {
      // entry for the page
      entry: 'src/entry/entryClient.js',
      // the source template
      template: 'public/index-cli.html',
      // // output as dist/index.html
      filename: 'index-cli.html',
      // // when using title option,
      // // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Client Page',
      // // chunks to include on this page, by default includes
      // // extracted common chunks and vendor chunks.
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    admin: {
      // entry for the page
      entry: 'src/entry/entryAdmin.js',
      // the source template
      template: 'public/index-adm.html',
      // // output as dist/index.html
      filename: 'index-adm.html',
      // // when using title option,
      // // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Admin Page',
      // // chunks to include on this page, by default includes
      // // extracted common chunks and vendor chunks.
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    
   
    // when using the entry-only string format,
    // template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found.
    // Output filename is inferred to be `subpage.html`.
    // subpage: 'src/subpage/main.js'
  },
  chainWebpack: config => {
    config.resolve.alias
        .set("@", resolve("src")) // key,value自行定义，比如.set('@@', resolve('src/components'))
        .set("_c", resolve("src/components"));
},

}
