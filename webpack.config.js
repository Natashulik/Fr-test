const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "js", "main.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/main.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.njk$/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "nunjucks-html-loader",
            options: {
              searchPaths: [path.resolve(__dirname, "src/components")],
            },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        },
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: { quality: 80 },
              webp: { quality: 80, lossless: false },
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/icons/[name][ext]",
        },
      },
      {
        test: /\.(woff2?|eot|woff|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "pages", "index.njk"),
      filename: "index.html",
      inject: true,
    }),
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ["dist"],
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: "css/main.css",
    }),
    /*new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets/images"),
          to: path.resolve(__dirname, "dist/assets/images"),
        },
         {
          from: path.resolve(__dirname, "src/assets/icons"),
          to: path.resolve(__dirname, "dist/assets/icons"),
        },
      ],
    }),*/
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    watchFiles: path.resolve(__dirname, "src"),
    port: 9000,
    open: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              ["svgo", { name: "preset-default" }],
            ],
          },
        },
      }),
    ],
  },
  resolve: {
    extensions: [".js", ".scss", ".njk"],
  },
};
