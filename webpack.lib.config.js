const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/ironic.js',
  output: {
    filename: 'ironic.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: '$I',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  resolve: {
    alias: {
      constants: path.resolve(__dirname, 'src/constants'),
      data: path.resolve(__dirname, 'src/data'),
      create: path.resolve(__dirname, 'src/create'),
      diff: path.resolve(__dirname, 'src/diff'),
      mount: path.resolve(__dirname, 'src/mount'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /.js/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
};
