require('babel/register');

//Base Paths
const APP_PATH    = './app',
      BUILD_PATH  = './dist';

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
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('index.html'),
      filename: 'index.html',
      hash: true
    })
  ],
  //Resolves paths
  resolve: {
    extensions : ['', '.js', '.jsx'],
    alias: {
      app: APP_PATH,
      lib: resolve('lib')
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
        test: /\.js$/,  
        exclude: /(node_modules|bower_components)/,
        loaders: ['jsx-loader','babel']
      }
    ]
  }
}