import { useState } from "react";
import Board from "./Board";
import Square from "./Square";
import { calculateWinner } from "./CalculateWinner";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = () => {};
  const jumpTo = () => {};
  const renderMoves = () => {};

  return <Board onClick={handleClick} />;
};

export default Game;
