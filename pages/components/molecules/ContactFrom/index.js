import { useState } from "react";
import FormButton from "../../atoms/FormButton";
import FormInput from "../../atoms/FormInput";
import TextArea from "../../atoms/TextArea";

function ContactForm() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    const placeholder = e.target.placeholder.toLowerCase();
    switch (placeholder) {
      case "name":
        setName(e.target.value);
        break;
      case "subject":
        setSubject(e.target.value);
        break;
      case "e-mail address":
        setEmail(e.target.value);
      case "message":
        setMessage(e.target.value);
        break;
      default:
        break;
    }
  };

  console.log(
    "Name: " + name,
    "subject: " + subject,
    "email: " + email,
    "message: " + message
  );

  return (
    <div className="w-96 mx-auto">
      <h3 className="text-center font-bold mb-7">Send An E-mail</h3>

      <form onSubmit={onSubmit} method="post">
        <FormInput placeholder="Name" onChange={onChange} />
        <FormInput placeholder="Subject" onChange={onChange} />
        <FormInput
          placeholder="E-mail Address"
          onChange={onChange}
          type="email"
        />
        <TextArea placeholder="Message" onChange={onChange} />

        <FormButton width="w-full" title="Send" textSize="sm" />
      </form>
    </div>
  );
}

export default ContactForm;
