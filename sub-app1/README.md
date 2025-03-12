1. 安装craco
```bash
pnpm i @craco/craco -D
```

2. 修改package.json
```json
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test"
}
```

3. 在项目根目录创建 craco.config.js 并添加以下配置：
```js
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.library = 'subApp2';
      webpackConfig.output.libraryTarget = 'umd';
      webpackConfig.output.publicPath = 'http://localhost:3000/'; // 子应用地址

      return webpackConfig;
    },
  },
};

```


4. 处理antd样式

```bash
pnpm i babel-plugin-import -D
```

```js
module.exports = {
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
};
```

5. craco-less

```bash
pnpm i craco-less -D
```

```js
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
```   