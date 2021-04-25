import Link from "next/link";

function BlogCard() {
  return (
    <div className="border w-full relative rounded p-4 mb-10">
      <div className="w-12 h-12 rounded-full overflow-hidden absolute -top-6 z-50">
        <img src="./assets/patrick.jpg" className="max-w-full" alt="avatar" />
      </div>

      <div className="mt-10 ">
        <h3 className="font-bold leading-4 text-md">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. facilis.
        </h3>

        <p className="text-xs my-3">
          {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore totam
          dolores sapiente animi ut laborum natus perspiciatis saepe, voluptatem
          eveniet.`.substr(0, 100)}
          ...
          <Link href="/blog/hello-my-guy">
            <a className="text-green-500 font-bold" style={{ fontSize: 11 }}>
              READ MORE
            </a>
          </Link>
        </p>
      </div>

      <div className="text-xs flex justify-between text-gray-400">
        <span>Published on 20.04.2021</span>
        <div className="">
          <span className="mr-1">
            Likes <span>0</span>
          </span>
          <span>
            Comments <span>0</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
