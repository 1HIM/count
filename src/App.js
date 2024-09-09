import React, { useState } from 'react';
import Child from './components/Child';
import Button from './components/Button';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Click the button!');

  const incrementCount = () => setCount(count + 1);
  const updateMessage = () => setMessage('You clicked the button!');

  return (
    <div className="App">
      <h1>React Debugging Task</h1>
      <p>Current Count: {count}</p>
      <Child count={count} />
      <Button onClick={incrementCount} />
      <div className="message-section">
        <h3>{message}</h3>
        <button onClick={updateMessage}>Change Message</button>
      </div>
    </div>
  );
}

export default App;
