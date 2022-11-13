import { BsMoon } from "react-icons/bs";

function Navbar() {
  return (
    <nav className="container flex pt-8 items-center p-24">
      <div className="flex flex-1 items-center gap-7">
        <img src="/logo96.png" alt="XO game logo" className="w-16" />
        <p className="text-black font-bold leading-4 text-lg font-inter">
          Tic Tac Toe <br />
          (XO) game
        </p>
      </div>
      <div className="flex gap-8">
        <button className="flex-1 border border-primary-light px-5 py-1 rounded-lg text-texts-light hover:shadow-md font-inter">
          About
        </button>
        <div className="flex w-10 h-10 rounded-full border border-borders justify-center items-center bg-secondary-light cursor-pointer hover:shadow-md">
          <BsMoon className="text-xl text-texts-light" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
