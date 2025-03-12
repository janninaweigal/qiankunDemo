// 注册qiankun
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'sub-app1',
    entry: 'http://localhost:4001',
    container: '#subapp-container',
    activeRule: '/app1',
  },
  {
    name: 'sub-app2',
    entry: 'http://localhost:4002',
    container: '#subapp-container',
    activeRule: '/app2',
  },
],
  // {
  //   beforeLoad: [
  //     (app) => {
  //       console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
  //     },
  //   ],
  //   beforeMount: [
  //     (app) => {
  //       console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
  //     },
  //   ],
  //   afterUnmount: [
  //     (app) => {
  //       console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
  //     },
  //   ],
  // },
);

start();

console.log('qiankun注册完成');
