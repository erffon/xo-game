import Navbar from "../../components/navbar/Navbar";
import Container from "../../components/Ui/Container";
import { BiCircle, BiX } from "react-icons/bi";

const Playground = () => {
  const tiles = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <div className="bg-light">
      <Navbar />
      <div className="container">
        <div className="flex flex-row flex-wrap mt-20 justify-center align-middle gap-5 px-16">
          {tiles.map((item) => {
            return (
              <Container className="w-24 h-24 text-center">{item}</Container>
            );
          })}
        </div>

        {/* ---------------------------- YOU and CPU icons --------------------------- */}
        <div className="flex flex-row justify-center gap-72 mt-16">
          <div className="flex flex-col items-center justify-center">
            <BiCircle className="text-7xl text-gray-400 mb-5" />
            <h3 className="text-2xl text-gray-500">YOU</h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <BiX className="text-8xl text-gray-400 " />
            <h3 className="text-2xl text-gray-500">CPU</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
