import Head from "next/head";
import ContactText from "./components/atoms/ContactText";
import ContactForm from "./components/molecules/ContactFrom";
import NavBar from "./components/molecules/NavBar";
import SideBar from "./components/organisms/SideBar";

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="flex justify-between">
        <div className="w-1/4">
          <SideBar />
        </div>

        <div className="flex-1 max-w-24 border">
          <NavBar routeName="Contact" />

          <ContactText />

          <hr className="my-10 w-4/5 mx-auto" />

          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default Contact;
