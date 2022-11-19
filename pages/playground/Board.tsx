import Container from "../../components/Ui/Container";
import Square from "./Square";

const Board = ({ squares, onClick }) => {
  return (
    <Container>
      {squares.map((square: number, i: number) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </Container>
  );
};

export default Board;
