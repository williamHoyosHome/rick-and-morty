const path = require('path');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = (env, argv) => {
  const plugins = [
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
    })
  ]

  if (argv.mode === 'production') {
    plugins.push(
      new CleanWebpackPlugin(['public'], {root: __dirname})
    )
  }

  return {
    entry: {
      "index": path.resolve(__dirname, './src/app/index.js'),
    },
    output: {
      path: path.resolve(__dirname, '/src/public'),
      filename: 'js/[name].[hash].js',
      publicPath: path.resolve(__dirname, 'public')+"/",
      chunkFilename: 'js/[id].[chunkhash].js',
    },
    devServer: {
      port: 9000,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              "presets": ["@babel/preset-env", "@babel/preset-react"],
            }
          },
        },
        {
          test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                }
              }
            ]
        },
        {
          test: /\.scss$/,
          use: MiniCssExtractPlugin.loader,
            fallback: "style-loader",
            use: ["css-loader", "sass-loader"]
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'images/[name].[hash].[ext]',
            }
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
        },
      ]
    },
    plugins: [
      "@babel/plugin-proposal-class-properties"
    ]
  }
}
