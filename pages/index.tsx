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
      <div className="flex justify-center items-center h-5/6">
        <div className="flex gap-3 border border-borders rounded-2xl w-2/5 py-12 px-10 justify-center items-center backdrop-blur-sm ">
          <img
            src="./images/waving-hand-emoji.png"
            alt="greetings to the users"
            className="w-10"
          />
          <h2 className="text-4xl">Hi</h2>
        </div>
      </div>
    </div>
  );
}
