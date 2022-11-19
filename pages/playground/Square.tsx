import React from "react";

// interface squareType {
//   value: number;
//   onClick: EventListener;
// }

const Square = ({ value, onClick }) => {
  return (
    <button
      className="mx-2 px-5 py-5 bg-slate-200 border-2 border-borders"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
