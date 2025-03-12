import React from 'react';
import { message, Button } from 'antd';

function App() {

  const test = () => {
    message.info({
      content: '装载sub-app1',
      duration: 1000000,
      getPopupContainer: (node, props) => {
        debugger
        if (node) {
          return node.parentNode;
        }
        return document.body;
      }
    });
  }

  return (
    <div className="App">
      <h1>Sub App 1</h1> 
      <Button onClick={test}>测试</Button>
    </div>
  );
}

export default App; 