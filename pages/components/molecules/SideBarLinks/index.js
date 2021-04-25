import Link from "next/link";

function NavLinks() {
  return (
    <div className="flex flex-col items-center">
      <Link href="/">
        <a className="block mb-7 border-gray-800 border-2 py-1 px-8 rounded text-sm cursor-pointer">
          Projects
        </a>
      </Link>
      <Link href="/blog">
        <a className="block border-gray-800 py-2 px-10 rounded text-sm cursor-pointer">
          Blog
        </a>
      </Link>
      <Link href="/contact">
        <a className="block border-gray-800 py-2 px-10 rounded text-sm cursor-pointer">
          Contact
        </a>
      </Link>
    </div>
  );
}

export default NavLinks;
