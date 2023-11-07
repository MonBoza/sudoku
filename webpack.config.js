const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'output.js',
      path: path.resolve(__dirname, 'dist')
    },
    devServer: {                                  // new line
        static: {                                   // new line
          directory: path.join(__dirname, "dist"),  // new line
        },                                          // new line
      },                                        
    devtool: 'eval-source-map', 
  plugins: [
    new ESLintPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Sudoku',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};