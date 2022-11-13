import Head from "next/head";
import Navbar from "../components/navbar/Navbar";

export default function Home() {
  return (
    <div className="bg-gradient-to-b h-screen from-white to-backgrounds-light-end">
      <Head>
        <title>XO game</title>
        <meta name="description" content="XO game" />
        <link rel="icon" href="/xo.ico" />
      </Head>
      <Navbar />
    </div>
  );
}
