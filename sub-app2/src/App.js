import React from 'react';
import { message, Button } from 'antd';

function App() {
  const test = () => {
    message.info('装载sub-app2', 1000000);
  }

  return (
    <div className="App">
      <h1>Sub App 2</h1>
      <Button onClick={test}>测试</Button>
    </div>
  );
}

export default App; 