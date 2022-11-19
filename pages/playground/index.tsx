import { useState } from "react";
import Board from "./Board";
import Square from "./Square";
import { calculateWinner } from "./CalculateWinner";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    //if occupied cell selected or someone won the game
    if (winner || boardCopy[i]) return;
    //put x & o in cells
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };
  const jumpTo = () => {};
  const renderMoves = () => {};

  return <Board onClick={handleClick} squares={board} />;
};

export default Game;
