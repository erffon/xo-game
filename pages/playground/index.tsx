import { useRouter } from "next/router";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Board from "./Board";
import calculateWinner from "./CalculateWinner";
const Game = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const { push } = useRouter();

  const handleClick = (i: number) => {
    const boardCopy: string[] = [...board];
    //if occupied cell selected or someone won the game
    if (winner || boardCopy[i]) {
      const winnerPlayer = xIsNext ? "Player2" : "Player1";
      push(`/result?winner=${winnerPlayer}`);
    }
    //put x & o in cells
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
  };

  return (
    <div className="bg-light h-screen">
      <Navbar onClick={resetGame} />
      <div className="container py-10">
        <Board onClick={handleClick} squares={board} />
        <div className="flex justify-center gap-24 text-slate-400 text-center mt-16">
          <div className="flex flex-col gap-1">
            <p className="text-5xl font-inter font-medium">O</p>
            <p className="text-2xl font-semibold">
              {window.localStorage.getItem("name")}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-5xl font-inter font-medium">X</p>
            <p className="text-2xl font-semibold">Player2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
