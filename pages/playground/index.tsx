import Navbar from "../../components/navbar/Navbar";
import Container from "../../components/Ui/Container";
import { BiCircle, BiX } from "react-icons/bi";

const Playground = () => {
  const resultTiles = [1, 2, 0, 0, 0, 0, 0, 0, 0];
  return (
    <div className="bg-light h-screen overflow-hidden">
      <Navbar />
      <div className="container">
        <div className="flex flex-row flex-wrap mt-10 justify-center items-center gap-5 px-80">
          {resultTiles.map((item) => {
            let result;
            switch (item) {
              case 1:
                result = <BiCircle className="text-6xl text-redish" />;
                break;
              case 2:
                result = <BiX className="text-8xl text-primary-light" />;
                break;
              default:
                result = "";
                break;
            }
            return (
              <Container
                className={`flex justify-center items-center w-24 h-24 ${
                  item == 0
                    ? "hover:border-2 hover:shadow-sm active:border-redish active:border-4"
                    : ""
                }`}
              >
                {result}
              </Container>
            );
          })}
        </div>

        {/* ---------------------------- YOU and CPU icons --------------------------- */}
        <div className="flex flex-row justify-center gap-40 mt-10">
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
