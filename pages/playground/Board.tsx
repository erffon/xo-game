import Container from "../../components/Ui/Container";

const Board = ({
  squares,
  onClick,
}: {
  squares: number[];
  onClick: MouseEvent;
}) => {
  return (
    <Container>
      {squares.map((square: number, i: number) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </Container>
  );
};

export default Board;
