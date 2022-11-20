import React from "react";

interface squareType {
  value: string;
  onClick: () => void;
}

const Square = ({ value, onClick }: squareType) => {
  return (
    <button
      className={`w-24 h-24 bg-secondary-light border-borders border rounded-xl text-5xl font-semibold ${
        !value ? "hover:border-2 hover:shadow-md" : ""
      } ${value == "X" ? "text-primary-light" : "text-redish"}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
