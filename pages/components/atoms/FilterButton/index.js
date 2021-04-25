import React from "react";

function FilterButton({ onClick, title, isActive=false }) {
  return (
    <button
      onClick={onClick}
      className={`border-2 border-gray-700 text-sm py-1 px-5 rounded ${
        isActive ? "bg-green-400 border-none text-white" : ""
      }`}
    >
      {title}
    </button>
  );
}

export default FilterButton;
