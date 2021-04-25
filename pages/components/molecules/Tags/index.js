import React from "react";
import TagButton from "../../atoms/TagButton";

function Tag({ Tags }) {
  return (
    <div className="shadow-md rounded mb-10">
      <h3 className="text-sm text-center border-b-2 p-3 font-bold">#Tags</h3>
      <div className='p-4'>
        <TagButton title="Next js" />
        <TagButton title="Django js" />
        <TagButton title="Next js" />
        <TagButton title="Django js" />
        <TagButton title="Next js" />
        <TagButton title="Django js" />
      </div>
    </div>
  );
}

export default Tag;
