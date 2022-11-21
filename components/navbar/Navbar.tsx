import { BsMoon } from "react-icons/bs";

function Navbar({ isHome = false }: { isHome?: boolean }) {
  return (
    <nav className="container flex pt-10 items-center h-1/6 font-inter">
      <div className="flex flex-1 items-center gap-5">
        <img src="/logo96.png" alt="XO game logo" className="w-16" />
        <p className="text-gray-800 font-bold leading-5 text-lg font-inter">
          Tic Tac Toe <br />
          (XO) game
        </p>
      </div>
      {/* /* --------------------------------- Buttons -------------------------------- */}
      <div className="flex flex-1 gap-6 justify-end">
        <button className=" border border-primary-light px-5 py-1 rounded-lg text-texts-light hover:shadow-md ">
          About
        </button>

        {!isHome && (
          <button className="px-5 py-1 bg-secondary-light rounded-lg text-texts-light border border-borders hover:shadow-md">
            Reset
          </button>
        )}
        <div className="flex w-10 h-10 rounded-full border border-borders justify-center items-center bg-secondary-light cursor-pointer hover:shadow-md">
          <BsMoon className="text-xl text-texts-light" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
