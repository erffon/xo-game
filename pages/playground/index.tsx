import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Board from "./Board";
import calculateWinner from "./CalculateWinner";
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

  return (
    <div className="bg-light h-screen">
      <Navbar />
      <div className="container py-24">
        <Board onClick={handleClick} squares={board} />
      </div>
    </div>
  );
};

export default Game;
