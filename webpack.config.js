require('babel/register');

const APP_PATH    = './app',
      BUILD_PATH  = './dist';

const HtmlWebpackPlugin = require('html-webpack-plugin');

//Resolves app path
function resolve(file) {
  return [APP_PATH, file].join('/');
};

//Exports
module.exports = {
  entry: [APP_PATH,'index.js'].join('/'),
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
  resolve: {
    extensions : ['', '.js', '.jsx'],
    alias: {
      app: APP_PATH,
      lib: [APP_PATH, 'lib'].join('/')
    }
  },
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