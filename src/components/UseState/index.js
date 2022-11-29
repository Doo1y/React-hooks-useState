import './UseState.css';
import { useState } from 'react';

const UseState = () => {
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);
  
  const switchTheme = () => {
    const buttonEl = document.querySelector('button');
    if (theme === 'light') {
      buttonEl.innerText = 'light';
      return setTheme('dark')
    }
    buttonEl.innerText = 'dark';
    return setTheme('light')
  };
  
  return (
    <div className={`${theme} state`}>
      <h1>UseState Component</h1>
      <button onClick={switchTheme}>
        dark
      </button>
      <h1>Click Count: {count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;