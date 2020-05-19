import React,{useState} from "react";
import { Square } from './index';
import calculateWinner from './calculateWinner';

const Board = () => {
  const [squares,setSquares] = useState(Array(9).fill(''));
  const [xIsNext,setIsNext] = useState(true);

  const handleClick = i => {
    const squaresCopy = squares.slice();
    if (calculateWinner(squaresCopy) || squaresCopy[i]) {
      return;
    }
    squaresCopy[i] = xIsNext ? 'X' : 'O';
    setSquares(squaresCopy);
    setIsNext(!xIsNext)
  }

  const renderSquare = i => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  }

  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${(xIsNext ? 'X' : 'O')}`;

  return (
    <>
      <div className="status">
        {status}
      </div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </>
  );
}

export default Board;
