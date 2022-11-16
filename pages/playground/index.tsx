import Navbar from "../../components/navbar/Navbar";
import Container from "../../components/Ui/Container";
import { BiCircle, BiX } from "react-icons/bi";

const Playground = () => {
  const tiles = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="flex flex-row mx-52 flex-wrap">
          {tiles.map((item) => {
            return <Container className="flex-1">item</Container>;
          })}
        </div>

        {/* ---------------------------- YOU and CPU icons --------------------------- */}
        <div className="flex flex-row justify-center gap-72 mt-20">
          <div className="flex flex-col items-center justify-center">
            <BiCircle className="text-8xl text-gray-400 mb-5" />
            <h3 className="text-4xl text-gray-500">YOU</h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <BiX className="text-9xl text-gray-400 " />
            <h3 className="text-4xl text-gray-500">CPU</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Playground;
