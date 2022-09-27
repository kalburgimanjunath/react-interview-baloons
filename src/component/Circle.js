import React from 'react';
export default function Circle({ color, value }) {
  return (
    <div className="circle" style={{ backgroundColor: `${color}` }}>
      {value}
    </div>
  );
}
