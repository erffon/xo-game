import Head from "next/head";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const saveName = (e: any) => {
    window.localStorage.setItem("name", inputValue);
    console.log(inputValue);
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
        <div className="flex flex-col gap-5 justify-center items-center bg-secondary-light border border-borders rounded-2xl py-12 px-10 w-2/5 backdrop-blur-sm">
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
            <p className="font-medium">please enter your name:</p>
          </div>
          <div>
            <input
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              name="name"
              id="name"
              placeholder="enter your name here"
              className="bg-secondary-light outline-none  px-5 py-2 border border-primary-light focus:border-2 focus:shadow-md text-center rounded-lg text-lg text-texts-light"
            />
          </div>
          <div>
            <button
              onClick={saveName}
              type="submit"
              className="bg-primary-light text-white font-medium px-6 shadow-md hover:shadow-lg text-lg py-2 rounded-lg hover:scale-105 duration-300 transition"
            >
              Submit
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
