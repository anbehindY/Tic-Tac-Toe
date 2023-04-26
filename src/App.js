import React from "react";
import { useState } from "react";

function Square ({value, handler}) {

  return <button className="square" onClick={handler}>{value}</button>
}

export default function Board () {
  const [squaresValue, setSquare] = useState(Array(9).fill(null));
  const clickHandler = (i) => {
    const newSquares = squaresValue.slice();
    newSquares[i] = 'X';
    setSquare(newSquares);
  }

  return (
    <div>
      <div className="board-row">
        <Square value={squaresValue[0]} handler={() => clickHandler(0)}/>
        <Square value={squaresValue[1]} handler={() => clickHandler(1)}/>
        <Square value={squaresValue[2]} handler={() => clickHandler(2)}/>
      </div>
      <div className="board-row">
        <Square value={squaresValue[3]} handler={() => clickHandler(3)}/>
        <Square value={squaresValue[4]} handler={() => clickHandler(4)}/>
        <Square value={squaresValue[5]} handler={() => clickHandler(5)}/>
      </div>
      <div className="board-row">
        <Square value={squaresValue[6]} handler={() => clickHandler(6)}/>
        <Square value={squaresValue[7]} handler={() => clickHandler(7)}/>
        <Square value={squaresValue[8]} handler={() => clickHandler(8)}/>
      </div>
    </div>
  );
}
