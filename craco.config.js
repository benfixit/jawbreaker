const CracoLessPlugin = require("craco-less");
const CracoAliasPlugin = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        modifyLessRule: function (lessRule, context) {
          lessRule.test = /\.module\.less$/;
          lessRule.exclude = /node_modules/;
          lessRule.use = [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: "[local]_[hash:base64:5]",
                },
              },
            },
            {
              loader: "less-loader",
              options: {
                additionalData: ['@import "./src/styles/theme.less";'].join(
                  "\r\n"
                ),
                lessOptions: {
                  javascriptEnabled: true,
                },
              },
            },
          ];

          return lessRule;
        },
      },
    },
    {
      plugin: CracoAliasPlugin,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.extend.json",
      },
    },
  ],
};
