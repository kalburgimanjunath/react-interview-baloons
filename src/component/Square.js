import React from 'react';
import Circle from './Circle';
export default function Square({ items, colors }) {
  console.log(items);
  return (
    <div className="square">
      {items &&
        items.map((item) => {
          return <Circle color={colors[item]} />;
        })}
    </div>
  );
}
