require('babel/register');

//Base Paths
const APP_PATH    = __dirname + '/app',
      BUILD_PATH  = __dirname + '/dist';

const HtmlWebpackPlugin = require('html-webpack-plugin');

//Resolves app path
function resolve(path) {
  return [APP_PATH, path].join('/');
};

//Exports
module.exports = {
  entry: resolve('index.js'),
  //Where Bundles output 
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('index.html'),
      filename: 'index.html',
      inject: true,
      hash: true
    })
  ],
  //Resolves paths
  resolve: {
    extensions : ['', '.js', '.jsx'],
    alias: {
      app: APP_PATH,
      lib: resolve('lib'),
      styles: resolve('styles')
    }
  },
  //Loaders and Stuffs
  module: {
    loaders: [
      { 
        test: /\.css$/, 
        loader: 'style!css'
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      },
      { 
        test: /\.js$/,  
        exclude: /node_modules/,
        loaders: ['jsx-loader','babel']
      }
    ]
  }
}