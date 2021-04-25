import React from "react";
import FilterButton from "../../atoms/FilterButton";

function AjaxFilters({ categories }) {
  return (
    <div className="flex justify-center my-10 gap-3">
      <FilterButton title="Next js" isActive={true} />
      <FilterButton title="React js" />
      <FilterButton title="Node js" />
      <FilterButton title="Django" />
    </div>
  );
}

export default AjaxFilters;
