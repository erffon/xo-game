import Square from "./Square";

interface boardProps {
  squares: string[];
  onClick: (i: number) => void;
}

const Board = ({ squares, onClick }: boardProps) => {
  return (
    <div className="grid grid-cols-5 justify-items-center">
      <div className="col-span-3 grid grid-cols-3 gap-3 col-start-2">
        {squares.map((square: string, i: number) => {
          return <Square value={square} key={i} onClick={() => onClick(i)} />;
        })}
      </div>
    </div>
  );
};

export default Board;
