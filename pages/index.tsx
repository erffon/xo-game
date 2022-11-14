import Head from "next/head";
import Navbar from "../components/navbar/Navbar";

export default function Home() {
  return (
    <div className="bg-light h-screen overflow-hidden">
      <Head>
        <title>XO game</title>
        <meta name="description" content="XO game" />
        <link rel="icon" href="/xo.ico" />
      </Head>
      <Navbar />
      <main className="flex h-4/6 justify-center items-center">
        <div className="flex flex-col justify-center items-center border border-borders rounded-2xl py-12 px-10 w-2/5 backdrop-blur-sm">
          <div className="flex gap-3  ">
            <img
              src="./images/waving-hand-emoji.png"
              alt="greetings to the users"
              className="w-10"
            />
            <h2 className="text-4xl">Hi</h2>
          </div>
          <div>
            <p>welcome to XO game</p>
            <p>please enter your name:</p>
          </div>
          <div>
            <input type="button" value="enter your name here" />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </div>
      </main>
    </div>
  );
}
