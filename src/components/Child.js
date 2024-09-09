import React from 'react';

function Child({ count }) {
  return (
    <div className="child-component">
      <p>Child Component Count: {count}</p>
    </div>
  );
}

export default Child;
