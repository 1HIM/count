import React, { useState } from 'react';

function Button({ onClick }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
    onClick(); // Increment count in App
  };

  return (
    <div className="button-component">
      <button onClick={handleClick}>Click me!</button>
      <p>Button clicked {clicks} times</p>
    </div>
  );
}

export default Button;
