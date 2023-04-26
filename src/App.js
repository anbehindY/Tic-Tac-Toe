import React from "react";
import { useState } from "react";

function Square ({value, handler}) {

  return <button className="square" onClick={handler}>{value}</button>
}

function calculateWinner (squaresValue) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for(let i=0;i<lines.length;i++){
    const [a,b,c] = lines[i];
    if(squaresValue[a] && squaresValue[a] === squaresValue[b] && squaresValue[a] === squaresValue[c]){
      return squaresValue[a];
    }
  }
  return null;
}

export default function Board () {
  const [squaresValue, setSquare] = useState(Array(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState(true);
  
  const clickHandler = (i) => {
    const newSquares = squaresValue.slice();
    if (squaresValue[i] || calculateWinner(squaresValue)){
      return;
    } else if(nextPlayer){
      newSquares[i] = 'X';
    } else {
      newSquares[i] = 'O';
    }
  
    setNextPlayer(!nextPlayer);
    setSquare(newSquares);
  }

  const winner = calculateWinner(squaresValue);
  let status;
  if (winner) {
    status = 'Winner:' + winner;
  } else {
    status = 'Next move:' + (nextPlayer ? 'X' : 'O');
  }

  return (
    <div>
      <div className="status">{status}</div>
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
