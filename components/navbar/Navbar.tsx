import Image from "next/image";
import logo from "../../public/logo48.png";
function Navbar() {
  return (
    <nav className="container">
      <Image src={logo} alt="XO game logo" placeholder="blur" />
    </nav>
  );
}

export default Navbar;
