import React from "react";

// interface squareType {
//   value: number;
//   onClick: EventListener;
// }

const Square = ({ value, onClick }) => {
  return <button onClick={onClick}>{value}</button>;
};

export default Square;
