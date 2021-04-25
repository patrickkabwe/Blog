import Head from "next/head";
import BlogCard from "./components/molecules/BlogCard";
import Tags from "./components/molecules/Tags";
import NavBar from "./components/molecules/NavBar";
import SideBar from "./components/organisms/SideBar";
import Ad from "./components/molecules/Ad";

function Blog() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div className="flex justify-between">
        <div className="w-1/4">
          <SideBar />
        </div>

        <div className="flex-1 max-w-full border">
          <NavBar routeName="Blog" />

          <section className="flex p-5 mx-auto my-14">
            <div className="w-4/5 grid grid-cols-2 gap-4 mr-5">
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>

            <div className="w-96">
              <Tags />
              <Ad />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Blog;
