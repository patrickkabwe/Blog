

function TagButton({ onClick, title }) {
  return (
    <button
      onClick={onClick}
      className="py-1 px-3 border-2 text-xs border-gray-700 rounded m-1"
    >
      {title}
    </button>
  );
}

export default TagButton;
