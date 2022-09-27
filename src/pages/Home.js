import React, { useState } from 'react';
import Square from '../component/Square';
import Circle from '../component/Circle';
export default function Home() {
  const [selectedItem, setItemForSquare] = useState();
  const [itemForSquare, setSquare] = useState([]);

  const colors = ['#06283D', '#5C2E7E', '#674747', '#F96666', 'F96666'];

  const [coloredCircles, setColoredCircles] = useState(colors);

  const ColorWidget = coloredCircles.map((item) => {
    return <Circle color={item} key={item} />;
  });
  const updateSquare = () => {
    if (selectedItem < colors.length) {
      setSquare([...itemForSquare, selectedItem]);
    }
  };
  console.log(itemForSquare);
  return (
    <div className="container">
      <div>
        {/* <Square color={colors[selectedItem]} /> */}
        <Square items={itemForSquare} colors={colors} />
      </div>
      <div>{ColorWidget}</div>
      <div>
        <input
          type="text"
          name="inputText"
          onChange={(e) => setItemForSquare(e.target.value)}
        />
        <br />
        <button type="button" onClick={() => updateSquare()}>
          Shoot
        </button>
      </div>
    </div>
  );
}
