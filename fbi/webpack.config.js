module.exports = (require, ctx) => {

  const path = require('path')
  const webpack = require('webpack')
  const ExtractTextPlugin = require('extract-text-webpack-plugin')
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  const CopyWebpackPlugin = require('copy-webpack-plugin')
  const nodeModulesPath = ctx.options.node_modules_path
  // const nodeModulesPath = ctx._.cwd('node_modules') // for local test
  const isProduction = ctx.taskParams && ctx.taskParams[0] === 'p' // fbi build -p
  const autoprefixerBrowsers = [
    'last 2 versions',
    '> 5%',
    'safari >= 5',
    'ie >= 8',
    'opera >= 12',
    'Firefox ESR',
    'iOS >= 6',
    'android >= 4'
  ]
  const noop = function () { }

  return {
    entry: {
      app: './src/js/index.js'
    },
    output: {
      filename: isProduction ? 'js/[name]-[hash:8].js' : 'js/[name].js?[hash:8]',
      chunkFilename: isProduction ? 'js/[name]-[hash:8].js' : 'js/[name].js?[hash:8]',
      path: ctx._.join(__dirname, '../', ctx.options.server.root),
      publicPath: './'
    },
    resolve: {
      modules: [nodeModulesPath] // important !!
    },
    resolveLoader: {
      modules: [nodeModulesPath] // important !!
    },
    devtool: !isProduction ? 'source-map' : null,
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/,
          query: {
            presets: [
              'babel-preset-es2015'
            ].map(item => path.join(nodeModulesPath, item)),
            cacheDirectory: true
          }
        },
        {
          test: /\.html$/,
          loader: 'html'
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style',
            loader: 'css!postcss'
          })
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
            'url?limit=10000&name=img/' + (isProduction ? '[name]-[hash:8].[ext]' : '[name].[ext]?[hash:8]')
          ]
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: isProduction ? 'css/[name]-[hash:8].css' : 'css/[name].css?[hash:8]',
        disable: false,
        allChunks: true
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        filename: isProduction ? 'js/[name]-[hash:8].js' : 'js/[name].js?[hash:8]'
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        favicon: './src/favicon.ico',
        template: './src/index.html'
      }),
      new CopyWebpackPlugin([
        { from: 'src/lib', to: 'lib' }
      ]),
      isProduction ? new webpack.optimize.UglifyJsPlugin({ // js ugllify
        compress: {
          warnings: false
        }
      }) : noop
    ],
    postcss: [
      require('autoprefixer')({
        browsers: autoprefixerBrowsers
      }),
      require('precss'),
      isProduction ? require('cssnano') : noop // css minify
    ]
  }

}