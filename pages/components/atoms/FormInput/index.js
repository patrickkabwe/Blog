function FormInput({ type = "text", placeholder, onChange }) {
  return (
    <div className="mb-5">
      <input
        type={type}
        placeholder={placeholder}
        className=" bg-gray-100 placeholder-text text-xs py-3 px-2 w-full rounded"
        onChange={onChange}
      />
    </div>
  );
}

export default FormInput;
