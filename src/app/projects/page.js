import DashboardProduct from "@/components/Products/DashboardProduct";
import Loading from "./loading";
import { getProjects } from "../../../sanity/sanity-utils";

export const metadata = {
  title: "Projects",
  description:
    "List of Experimental 2 projects that available to public, containing produc A B C D",
};

async function getProjectsData() {
  try {
    const projects = await getProjects();
    return projects;
  } catch (error) {
    console.log("error fetching posts", error);
    return [];
  }
}

export default async function Projects() {
  const projects = await getProjectsData();

  if (projects?.length == 0) {
    return (
      <div className="w-screen box-border">
        <Loading />{" "}
      </div>
    );
  }
  console.log(projects);
  return (
    <div className="bg-background w-full h-auto">
      <div className="bg-background w-full h-auto">
        <section className=" text-textWhite  w-[100%] h-[100%] bg-background pt-[80px] lg:pt-[200px]">
          <h1 className="text-textWhite pl-[1em] lg:pl-[2em] pt-20 pb-10 text-[30px] lg:text-[60px]">
            Our Projects
          </h1>
          {projects?.map((index, i) => {
            return <DashboardProduct data={index} key={i} />;
          })}
        </section>
      </div>
    </div>
  );
}
