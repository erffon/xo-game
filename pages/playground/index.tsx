import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Board from "./Board";
import calculateWinner from "./CalculateWinner";
const Game = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const { push } = useRouter();

  const [firstPlayer, setFirstPlayer] = useState<string | null>("");
  const [secondPlayer, setSecondPlayer] = useState<string | null>("");

  useEffect(() => {
    setFirstPlayer(window.localStorage.getItem("player1"));
    setSecondPlayer(window.localStorage.getItem("player2"));
  }, []);

  const boardCopy: string[] = [...board];
  //if occupied cell selected or someone won the game
  useEffect(() => {
    if (winner) {
      const winnerPlayer = xIsNext ? firstPlayer : secondPlayer;
      push(`/result?winner=${winnerPlayer}`);
    }
  }, [xIsNext]);

  const handleClick = (i: number) => {
    if (winner || boardCopy[i]) {
      return;
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
            <p
              className={`text-5xl font-inter font-medium ${
                !xIsNext ? "text-redish animate-bounce" : ""
              }`}
            >
              O
            </p>
            <p
              className={`text-2xl font-semibold ${
                !xIsNext ? "text-redish" : ""
              }`}
            >
              {firstPlayer}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p
              className={`text-5xl font-inter font-medium ${
                xIsNext ? "text-primary-light animate-bounce" : ""
              }`}
            >
              X
            </p>
            <p
              className={`text-2xl font-semibold ${
                xIsNext ? "text-primary-light" : ""
              }`}
            >
              {secondPlayer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
