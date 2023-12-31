import { kanit } from "@/app/fonts";
// import { useEffect, useState } from "react";

// import { useParams } from "next/navigation";
import { getProject } from "../../../../sanity/sanity-utils";
import createBody from "@/components/Blogs/createBody";
import Loading from "../loading";
import PhotoGrid from "@/components/Products/PhotoGrid";

const kanit_fonts = kanit;
// export const runtime = "edge";

async function getDataProject(context) {
  try {
    const slug = context.params.slug;
    const project = await getProject(slug);
    return project;
  } catch (error) {
    console.log("error fetching posts", error);
  }
}

export default async function Project(context) {
  const project = await getDataProject(context);
  // const router = useParams();
  // const { slug } = router;
  // const [blog, setBlogs] = useState([]);
  //
  // useEffect(() => {
  //   getDataProject(slug)
  //     .then((data) => {
  //       setBlogs(data);
  //     })
  //     .catch((error) => {
  //       console.log("error fetching posts", error);
  //     });
  // });
  if (project == undefined) {
    return (
      <div className="w-full box-border">
        <Loading />{" "}
      </div>
    );
  }
  let bodyFirst = "";
  let bodyAfter = "";
  let blogDate = null;
  let blogTime = null;
  if (project) {
    if (project?.parallaxImage) {
      bodyFirst += createBody(project?.body);
      blogDate = new Date(project?.publishedAt);
    } else {
      bodyFirst += createBody(project?.body);
    }
    let newDate = new Date(project?.publishedAt);
    blogDate = newDate.toDateString();
    blogTime = newDate.toLocaleTimeString();
  }

  return (
    <section className="bg-background w-full h-full text-textWhite">
      {/* <h1>Home Page</h1>
        <Link href="/another-page" className="text-white">
          Go to Another Page
        </Link> */}
      <header
        className="bg-header flex items-center justify-center h-[600px] pb-12"
        style={{
          backgroundImage: `url(${project?.mainImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        alt={project?.title}
      >
        {/* <div className="bg-background text-textWhite font-serif mx-4 p-4 text-center md:p-8">
          <p className="text-lg">Author Name</p>
        </div> */}
      </header>

      <div className="font-serif leading-normal py-12 px-4 max-w-lg">
        <h1 className="text-5xl uppercase">{project?.title}</h1>
        <div className="flex gap-3">
          <p className="italic text-sm">{blogDate + " " + blogTime}</p>
          {project?.tags?.map((index, i) => {
            return (
              <div key={i} className="flex  gap-1 items-center ">
                <div
                  className={`rounded-full w-2 h-2 
               
                `}
                  style={{
                    backgroundColor:
                      index?.color ?? "rgb(127 124 108 / var(--tw-bg-opacity))",
                  }}
                ></div>{" "}
                <div>{index?.tags ?? "tags"}</div>
              </div>
            );
          })}
        </div>
        {/* <p className="mb-6 text-xl md:text-2xl uppercase text-primary">
            {bodyFirst}
          </p> */}
        {/* <p className="mb-4 text-lg">{bodyFirst}</p> */}
        {bodyFirst.split("\n").map((index, i) => (
          <p
            className="mb-4 text-lg"
            dangerouslySetInnerHTML={{ __html: index }}
            key={i}
          >
            {/* {index} */}
          </p>
        ))}
      </div>
      <div className="grid grid-cols-1 pt-6 md:grid-cols-3 w-full h-full gap-3  border-t-2 border-secondary">
        {project?.imagesGallery?.map((index, i) => {
          return <PhotoGrid data={index} key={i} />;
        })}
      </div>
    </section>
  );
}
