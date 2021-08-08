const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/preset-create-react-app",
      options: {
        craOverrides: {
          fileLoaderExcludes: ["less"],
        },
      },
    },
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@utils": path.resolve(__dirname, "../src/utils"),
      "@components": path.resolve(__dirname, "../src/components"),
    };

    const lessLoader = {
      loader: "less-loader",
      options: {
        additionalData: ["@import './src/styles/theme.less';"].join("\r\n"),
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    };

    const cssModulesLoader = {
      loader: "css-loader",
      options: {
        modules: true,
      },
    };

    /**
     * Process non-module Less
     */
    config.module.rules.push({
      test: /(?<!\.module)\.less$/,
      use: ["style-loader", "css-loader", lessLoader],
    });

    /**
     * Process Less modules
     */
    config.module.rules.push({
      test: /\.module\.less$/,
      use: ["style-loader", cssModulesLoader, lessLoader],
    });

    /**
     * Remove the module scope plugin
     */
    config.resolve.plugins = config.resolve.plugins.filter(
      (plugin) => !plugin.appSrcs
    );
    return config;
  },
};
