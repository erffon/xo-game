import Square from "./Square";

const Board = ({ squares, onClick }) => {
  return (
    <div>
      {squares.map((square, i) => {
        return (
          <Square
            value={square}
            key={i}
            onClick={() => onClick("hello test")}
          />
        );
      })}
    </div>
  );
};

export default Board;
