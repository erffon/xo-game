import Image from "next/image";
import logo from "../../public/logo48.png";
function Navbar() {
  return (
    <nav className="container flex">
      <Image
        src={logo}
        alt="XO game logo"
        placeholder="blur"
        className="pt-8"
      />
      <div>
        <button className="border">About</button>
      </div>
    </nav>
  );
}

export default Navbar;
