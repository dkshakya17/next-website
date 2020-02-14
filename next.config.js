const withPlugins = require('next-compose-plugins');
const sass = require("@zeit/next-sass")
const css = require("@zeit/next-css")
const sitemap = require('nextjs-sitemap-generator');  
sitemap({  
  baseUrl: '<https://www.cashfree.com>',  
  pagesDirectory: __dirname + "/pages",  
  targetDirectory : 'static/'  
});

const nextConfig = {
  webpack: function (config) {
  config.module.rules.push({
    test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
    use: {
    loader: 'url-loader',
      options: {
        limit: 100000,
        name: '[name].[ext]'
      }
    }
  })
  return config
  },
  
  exportPathMap: function () {
      return {
        '/': { page: '/' },
      }
    }
  
}

module.exports = withPlugins([
  [css],
  [sass]
], nextConfig);