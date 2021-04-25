import { useState } from "react";
import FormInput from "../../atoms/FormInput";
import { validateEmail } from "../../../../utils";

function NewsLetter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(undefined);

  const onSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      setError("Email is required");
    }

    if (email !== "") {
      if (!validateEmail(email)) {
        setError("Email is not valid");
      }
    }

    setTimeout(() => {
      setError(undefined);
    }, 4000);
  };

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form method="POST" className="w-4/5 mx-auto mt-10" onSubmit={onSubmit}>
      <label className="uppercase font-bold text-sm mb-1 block">
        NewsLetter
      </label>
      <FormInput
        // type="email"
        placeholder="Enter your E-mail Address"
        onChange={onChange}
      />
      <span className="text-red-500 text-xs">{error && error}</span>
      <button
        type="submit"
        className="py-3 rounded mt-3 block bg-green-500 text-xs text-white w-full focus:outline-none"
      >
        Subscribe
      </button>
    </form>
  );
}

export default NewsLetter;
