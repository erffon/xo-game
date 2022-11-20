import React from "react";

// interface squareType {
//   value: number;
//   onClick: EventListener;
// }

const Square = ({ value, onClick }) => {
  return (
    <button
      className={`w-24 h-24 bg-secondary-light border-borders border rounded-xl ${
        !value ? "hover:border-2 hover:shadow-md" : ""
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
