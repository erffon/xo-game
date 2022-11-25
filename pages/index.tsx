import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Container from "../components/Ui/Container";

export default function Home() {
  const [firstPlayer, setFirstPlayer] = useState("");
  const [secondPlayer, setSecondPlayer] = useState("");
  const { push } = useRouter();

  const saveName = (e: any) => {
    if (!!firstPlayer && !!secondPlayer) {
      window.localStorage.setItem("player1", firstPlayer);
      window.localStorage.setItem("player2", secondPlayer);
      push("/playground");
    }
  };
  return (
    <div className="bg-light h-screen overflow-hidden font-inter">
      <Head>
        <title>XO game</title>
        <meta name="description" content="XO game" />
        <link rel="icon" href="/xo.ico" />
      </Head>
      <Navbar isHome={true} />
      <main className="flex h-4/6 justify-center items-center">
        <Container className="flex flex-col gap-5 py-12 px-10 w-2/5 justify-center items-center">
          <div className="flex gap-3">
            <img
              src="./images/waving-hand-emoji.png"
              alt="greetings to the users"
              className="w-10 hover:-rotate-6 duration-300 hover:scale-110 "
            />
            <h2 className="text-4xl font-bold text-texts-light">Hi</h2>
          </div>
          <div className="text-texts-light text-center text-xl ">
            <p className="tracking-widest font-light">welcome to XO game</p>
            <p className="font-medium">please enter Players name:</p>
          </div>
          <div className="flex justify-center gap-4 flex-col">
            <input
              onChange={(e) => setFirstPlayer(e.target.value)}
              type="text"
              name="name1"
              id="name1"
              placeholder="First Player"
              className="bg-secondary-light outline-none  px-5 py-2 border border-primary-light focus:border-2 focus:shadow-md text-center rounded-lg text-lg text-texts-light"
            />
            <input
              onChange={(e) => setSecondPlayer(e.target.value)}
              type="text"
              name="name2"
              id="name2"
              placeholder="Second Player"
              className="bg-secondary-light outline-none  px-5 py-2 border border-primary-light focus:border-2 focus:shadow-md text-center rounded-lg text-lg text-texts-light"
            />
          </div>
          <div>
            <button
              onClick={saveName}
              type="button"
              className="bg-primary-light text-white font-medium px-6 shadow-md hover:shadow-lg text-lg py-2 rounded-lg hover:scale-105 duration-300 transition"
            >
              Submit
            </button>
          </div>
        </Container>
      </main>
    </div>
  );
}
