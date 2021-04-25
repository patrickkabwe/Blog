import Head from "next/head";
import { useRouter } from "next/router";
import ContactText from "../components/atoms/ContactText";
import ContactForm from "../components/molecules/ContactFrom";
import NavBar from "../components/molecules/NavBar";
import SideBar from "../components/organisms/SideBar";

function SingleBlog() {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>{query.slug}</title>
      </Head>
      <div className="flex justify-between">
        <div className="w-1/4">
          <SideBar />
        </div>

        <div className="flex-1 max-w-24 border">
          <NavBar routeName='Post' />
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
