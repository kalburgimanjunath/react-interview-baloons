import React, { useState } from 'react';
import Square from '../component/Square';
import Circle from '../component/Circle';
export default function Home() {
  const [selectedItem, setItemForSquare] = useState();
  const [itemForSquare, setSquare] = useState([]);

  const colors = ['#d7d7d7', '#5C2E7E', '#b74747', '#F96866', 'b96966'];

  const randomColors = colors[Math.floor(Math.random() * colors.length)];
  const getRandomItem = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length + 1);
    return arr[randomIndex];
  };
  const [coloredCircles, setColoredCircles] = useState(colors);

  const ColorWidget = coloredCircles.map((item, index) => {
    return <Circle color={getRandomItem(colors)} key={item} value={index} />;
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
      <div className="colorwidget">{ColorWidget}</div>
      <div>
        <input
          type="number"
          name="inputText"
          placeholder="Enter boloon to add into square"
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
