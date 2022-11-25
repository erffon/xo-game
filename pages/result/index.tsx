import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Container from "../../components/Ui/Container";

const Result = () => {
  const { query, push } = useRouter();
  const [firstPlayer, setFirstPlayer] = useState<string | null>("");

  useEffect(() => {
    setFirstPlayer(window.localStorage.getItem("player1"));
  }, []);

  return (
    <div className="bg-light h-screen overflow-hidden font-inter">
      <Navbar isHome={true} />
      <main className="flex h-4/6 justify-center items-center">
        <Container className="flex flex-col gap-5 py-12 px-10 w-2/5 justify-center items-center">
          <div className="flex gap-3">
            <h2 className="text-4xl font-bold text-texts-light">Congrats</h2>
            <img
              src="./images/partying-face-emoji.png"
              alt="greetings to the users"
              className="w-10 hover:-rotate-6 duration-300 hover:scale-125 mb-7"
            />
          </div>
          <div className="text-texts-light text-center text-xl leading-9">
            <p className="tracking-widest font-light">
              <span
                className={`${
                  query.winner == firstPlayer ? "text-redish" : "text-green-600"
                } font-bold`}
              >
                {query.winner}
              </span>{" "}
              won the game
            </p>
            <p className="font-medium">do you want to play again?</p>
          </div>
          <button
            type="button"
            className="bg-primary-light text-white font-medium px-6 shadow-md hover:shadow-lg text-lg py-2 rounded-lg hover:scale-105 duration-300 transition mt-7"
            onClick={() => push("/playground")}
          >
            Play again
          </button>
        </Container>
      </main>
    </div>
  );
};

export default Result;
