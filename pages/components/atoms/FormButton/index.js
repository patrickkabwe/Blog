import React from "react";

function FormButton({ title, onClick, width, textSize }) {
  return (
    <button
      onClick={onClick}
      className={`mt-3 outline-none focus:outline-none active:bg-green-700 rounded text-white border-none bg-green-500 font-medium text-${textSize} px-5 py-2 ${
        width ? width : "w-40"
      }`}
    >
      {title}
    </button>
  );
}

export default FormButton;
