import React from "react";

function TextArea({ placeholder, onChange }) {
  return (
    <div>
      <textarea
        onChange={onChange}
        placeholder={placeholder}
        rows='7'
        className="w-full bg-gray-100 focus:outline-none p-2 text-xs"
      ></textarea>
    </div>
  );
}

export default TextArea;
