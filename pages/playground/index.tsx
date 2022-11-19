import { useState } from "react";
import Board from "./Board";
import Square from "./Square";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const handleClick = () => {};
  const jumpTo = () => {};
  const renderMoves = () => {};

  return <Board onClick={handleClick} />;
};

export default Game;
