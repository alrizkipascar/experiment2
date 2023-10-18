import { GV } from "./fonts";
import DashboardProduct from "@/components/Products/DashboardProduct";
import { client } from "../../sanity/sanity";
import { getDashboardProject } from "../../sanity/sanity-utils";
import { groq } from "next-sanity";
import Loading from "./loading";
import Hero from "@/components/Page/Hero";
import FAQ from "@/components/Page/FAQ";
import HeroBlog from "@/components/Page/HeroBlog";

async function getData() {
  return client.fetch(groq`*[_type == "dashboardcontent"]`);
}
async function getDashboardProjects() {
  try {
    const blogs = await getDashboardProject();
    return blogs;
  } catch (error) {
    console.log("error fetching posts", error);
    return [];
  }
}

export default async function Home() {
  const title = await getData();
  const projects = await getDashboardProjects();

  if (title.length == 0 || projects.length == 0) {
    return (
      <div className="w-screen box-border">
        <Loading />{" "}
      </div>
    );
  }
  return (
    <div className="w-full h-auto ">
      <section className="hidden lg:block parallax lg:w-full h-[5px] lg:h-[100vh] text-whitebg overflow-hidden ">
        <video
          className="parallax-bg lg:w-full lg:h-full"
          loop
          autoplay=""
          muted
        >
          <source src="/fashionedit.mp4" type="video/mp4" />
        </video>

        <div className="parallax-content ">
          <h1
            className={`${GV.className} text-[60px] lg:text-[100px] font-semibold text-center`}
          >
            Experimental - 2
          </h1>
          <p className="text-lg text-center">Alrizki Pasca</p>
        </div>
      </section>
      <div className="bg-background w-full h-auto">
        <Hero />
        <section className=" text-textWhite  w-full h-full lg:h-full ">
          <section className=" text-textWhite   w-full h-full ">
            <h1 className="border-b border-secondary text-textWhite pt-20 pb-10 pl-6 lg:pl-36 text-[30px] lg:text-[60px]">
              {title[0]?.title ?? ""}
            </h1>
            <HeroBlog />
          </section>
        </section>
        <section className=" text-textWhite  w-[100%] h-[100%] bg-background ">
          <div className="text-textWhite  pt-20 pb-10 pl-6 lg:pl-36 text-[30px] lg:text-[60px]">
            {title[1]?.title ?? "Explore our available open pojects"}
          </div>
          {projects?.map((index, i) => {
            return <DashboardProduct data={index} key={i} />;
          })}
          {/* <DashboardProduct id={1} />
          <DashboardProduct id={2} /> */}
        </section>

        <FAQ></FAQ>
      </div>
    </div>
  );
}
