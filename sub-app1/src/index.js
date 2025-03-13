// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
// import 'antd/dist/antd.min.css';

// ⚠️ 关键：确保 `root` 是全局变量，以便 `unmount` 时能访问
let root = null;

// ConfigProvider.config({
//   prefixCls: 'sub-app1',
//   locale: zhCN,
// })

function render(props = {}) {
  const { container } = props;
  root = container ? container.querySelector('#root') : document.getElementById('root')
  
  ReactDOM.render(
    <ConfigProvider locale={zhCN} prefixCls={"sub-app1"}>
      <App />
    </ConfigProvider>,
    root
  )
}

// 独立运行时，直接渲染
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

// ⚠️ 关键：导出 qiankun 需要的生命周期函数
export async function bootstrap() {
  // console.log('[app1] bootstraped');
}

export async function mount(props) {
  console.log('[app1] 装载', props);
  render(props);
}

export async function unmount(props) {
  console.log('[app1] 卸载', props);
  if (root) {
    ReactDOM.unmountComponentAtNode(root);
    root = null;
  }
}
