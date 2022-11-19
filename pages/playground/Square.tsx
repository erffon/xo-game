import React from "react";

// interface squareType {
//   value: number;
//   onClick: EventListener;
// }

const Square = ({ value, onClick }) => {
  const style = value ? `squares ${value}` : `squares`;

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
