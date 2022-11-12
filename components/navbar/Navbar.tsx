import { BsMoon } from "react-icons/bs";

function Navbar() {
  return (
    <nav className="container flex pt-8 items-center">
      <div className="flex-1">
        <img src="/logo96.png" alt="XO game logo" className="w-16" />
      </div>
      <div className="flex gap-8">
        <button className="flex-1 border border-primary-light px-5 py-1 rounded-lg">
          About
        </button>
        <div className="w-10 h-10 rounded-full border border-borders">
          <BsMoon className="relative top-0 left-0" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
