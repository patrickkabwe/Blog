import Head from "next/head";
import AjaxFilters from "./components/molecules/AjaxFilters";
import NavBar from "./components/molecules/NavBar";
import ProjectCard from "./components/molecules/ProjectCard";
import SideBar from "./components/organisms/SideBar";

function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div className="flex justify-between">
        <div className="w-1/4">
          <SideBar />
        </div>

        <div className="project flex-1 max-w-24 border">
          <NavBar routeName="Projects" />

          {/* Filters */}
          <AjaxFilters />

          {/* Projects */}
          <div className="flex gap-4 flex-wrap justify-center">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
