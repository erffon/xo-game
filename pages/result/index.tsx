import { useRouter } from "next/router";
import Navbar from "../../components/navbar/Navbar";
import Container from "../../components/Ui/Container";

const Result = () => {
  const { query, push } = useRouter();

  return (
    <div className="bg-light h-screen overflow-hidden font-inter">
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
            <p className="font-medium">please enter your name:</p>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Result;
