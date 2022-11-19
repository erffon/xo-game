import React from "react";

// interface squareType {
//   value: number;
//   onClick: EventListener;
// }

const Square = ({ value, onClick }) => {
  return (
    <button className="mx-2 px-1 bg-slate-300" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
