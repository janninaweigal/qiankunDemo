const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              'primary-color': '#1abb9c', // 主题色
              'btn-primary-bg': '#1abb9c', // 按钮背景色
              'ant-prefix': 'sub-app1'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  babel: {
    plugins: [
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true, // `style: true` 会加载 less 文件
        },
        'antd',
      ],
    ],
  },
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.library = 'sub-app1';
      webpackConfig.output.libraryTarget = 'umd';
      webpackConfig.output.publicPath = 'http://localhost:4001'; // 子应用地址

      return webpackConfig;
    },
  },
};