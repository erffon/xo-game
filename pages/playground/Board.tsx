import Container from "../../components/Ui/Container";
import Square from "./Square";

const Board = ({ squares, onClick }) => {
  return (
    <div>
      <Square className="px-3" value="1" onClick={() => onClick("test")} />
      <Square className="px-3" value="2" onClick={() => onClick("test")} />
      <Square className="px-3" value="3" onClick={() => onClick("test")} />
      <Square className="px-3" value="4" onClick={() => onClick("test")} />
      <Square className="px-3" value="5" onClick={() => onClick("test")} />
      <Square className="px-3" value="6" onClick={() => onClick("test")} />
      <Square className="px-3" value="7" onClick={() => onClick("test")} />
      <Square className="px-3" value="8" onClick={() => onClick("test")} />
      <Square className="px-3" value="9" onClick={() => onClick("test")} />
    </div>
  );
};

export default Board;
