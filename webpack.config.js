const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: ['./polyfills', 'react-hot-loader/patch', './index.web.js'],
  devServer: {
    hot: true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          configFile: false,
          babelrc: false,
          presets: [
            '@babel/preset-env',
            '@babel/react',
            'module:metro-react-native-babel-preset',
          ],
          plugins: [
            'react-hot-loader/babel',
            "react-native-classname-to-style",
            [
              "react-native-platform-specific-extensions",
              { extensions: ["scss", "sass"] }
            ],
            '@babel/transform-runtime',
            '@babel/plugin-transform-spread',
            '@babel/plugin-transform-flow-strip-types',
            '@babel/proposal-class-properties',
            '@babel/proposal-object-rest-spread',
            '@babel/plugin-syntax-dynamic-import',
            [
              '@babel/plugin-proposal-decorators',
              {
                'legacy': true,
              },
            ],
            [
              'transform-imports',
              {
                'lodash': {
                  'transform': 'lodash/${member}',
                  'preventFullImport': false,
                },
                'moment': {
                  'transform': 'moment/${member}',
                  'preventFullImport': false,
                },
              },
            ],
            [
              'module-resolver',
              {
                'root': [
                  './src',
                ],
              },
            ],
            '@babel/transform-modules-commonjs',
          ],
        },
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[hash].[ext]',
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: '@teamthread/strict-css-modules-loader',
          },
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: '@teamthread/strict-css-modules-loader',
          },
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {plugins: [autoprefixer()]},
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
    extensions: ['.web.js', '.js', '.web.jsx', '.jsx'],
    mainFields: ['browser', 'main'],
  },
};