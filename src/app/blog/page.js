// "use client";
import BlogGrid from "@/components/BlogGrid";
import Link from "next/link";
import { getBlogs } from "../../../sanity/sanity-utils";
import createBody from "@/components/Blogs/createBody";
import Loading from "./loading";

async function getDataBlogs() {
  try {
    const blogs = await getBlogs();
    return blogs;
  } catch (error) {}
}

export default async function Blog() {
  const blog = await getDataBlogs();
  if (blog == undefined) {
    return (
      <div className="w-full box-border">
        <Loading />{" "}
      </div>
    );
  }
  const truncate = (str, max, len) => {
    return str.length > max ? str.substring(0, len) + "..." : str;
  };
  let bodyText = createBody(blog[0]?.body);
  const staticDesc = truncate(bodyText, 500, 500);
  const date = blog[0]?.publishedAt.split(/[/:\-T]/) ?? null;

  return (
    <section className=" h-full bg-background min-w-full flex min-h-screen flex-col  justify-between px-12 pt-[200px] text-textWhite">
      <div className="lg:px-24 h-full">
        <div className={`self-start   lg:w-[600px] h-auto `}>
          <p className="text-[30px] lg:text-[60px] text-textWhite ">
            Latest Blog
          </p>
        </div>
        <div
          id="first"
          className="h-full w-full  pt-4 border-t-2 border-secondary"
        >
          <article
            itemScope
            itemType="https://schema.org/Article"
            className="grid lg:grid-cols-5"
          >
            <div
              className={`transition-all duration-500  w-full h-full  lg:col-span-2 overflow-hidden `}
            >
              <img
                src={blog[0]?.imageUrl ?? null}
                alt="list"
                className="w-full h-full  object-cover   transform duration-700  hover:scale-105"
              ></img>
            </div>{" "}
            <div className="lg:col-span-3 w-full h-full">
              <div className="grid grid-rows-5  w-full h-full">
                <div
                  className={`transition-all duration-700 row-span-1 w-full h-full  grid pl-[20px]`}
                >
                  <p className="self-center text-textWhite">
                    {date
                      ? `${date[0]}-${date[1]}-${date[2]} ${date[3]}:${date[4]}`
                      : ""}
                  </p>{" "}
                </div>
                <div
                  className={`transition-all duration-700 pl-[20px] row-span-1 w-full h-full  text-3xl text-slate-800 font-bold `}
                >
                  {blog[0]?.title}
                </div>
                <p
                  className={`transition-all duration-700 pl-[20px] row-span-2 `}
                >
                  {staticDesc}
                </p>
                <div
                  className={`  transition-all duration-1000 pl-[20px] grid row-span-1 w-full h-full`}
                >
                  <Link
                    href={`blog/${blog[0]?.slug}`}
                    className="button-fill hover:text-slate-700 self-center text-center  w-[40%] lg:w-[200px] h-[30px] "
                  >
                    Read full blog
                  </Link>
                </div>
              </div>
            </div>
          </article>
          <section className="pt-6">
            <div className={`self-start   lg:w-[600px] h-auto  `}>
              <p className="text-[30px] lg:text-[60px] text-textWhite ">
                More Blog
              </p>
            </div>
            <div className="grid grid-cols-1 pt-6 lg:grid-cols-3 w-full h-full gap-3  border-t-2 border-secondary">
              {/* data?.slice(1, 4).map((index, i) => { */}
              {blog?.map((index, i) => {
                return <BlogGrid key={i} data={index} indexData={i}></BlogGrid>;
              })}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
