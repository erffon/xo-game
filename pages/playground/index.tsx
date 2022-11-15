import Navbar from "../../components/navbar/Navbar";
import Container from "../../components/Ui/Container";
import { BiCircle, BiX } from "react-icons/bi";

const Playground = () => {
  return (
    <>
      <Navbar />
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
    </>
  );
};

export default Playground;
