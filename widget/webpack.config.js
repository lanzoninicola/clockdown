//./node_modules/@fontsource/inter/500.css

// TODO: ContextReplacementPlugin // date-fns project https://date-fns.org/v2.28.0/docs/webpack

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

/* ---------------
 * Main config
 * We will place here all the common settings
 * ---------------*/
const config = {
  mode: "production",

  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
    // let me help copy static files from a folder to the build out folder
    // new CopyWebpackPlugin({
    //   patterns: [{ from: "static" }],
    // }),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin(), "..."],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      // loading font from @fontsource npm package
      // {
      //   test: /\.(scss|css)$/i,
      //   use: ["style-loader", "css-loader"],
      // },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // load svg files
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
};

const configPublic = Object.assign({}, config, {
  name: "configPublic",
  entry: {
    shortcode: "./src/main.tsx",
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "./public"),
  },
});

module.exports = [configPublic];
