import Link from "next/link";

const overLayStyles = (imgUrl) => ({
  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${imgUrl})`,
  backgroundSize: "cover",
});

function ProjectCard({ imgUrl, linkTo }) {
  return (
    <div
      className="w-96 h-72 overflow-hidden shadow-lg rounded-md relative"
      style={overLayStyles("./assets/web1.jpg")}
    >
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  z-50">
        <Link href="/">
          <a className="rounded border-2 border-green-500 py-1 text-green-500 px-5 transition-colors delay-75 hover:bg-green-500 hover:text-white shadow-lg bottom-1/2 ">
            View Project
          </a>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
