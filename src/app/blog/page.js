"use client";
import BlogGrid from "@/components/BlogGrid";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getBlogs } from "../../../sanity/sanity-utils";
import createBody from "@/components/Blogs/createBody";

async function getDataBlogs() {
  try {
    const blogs = await getBlogs();
    return blogs;
  } catch (error) {}
}

export default function Blog() {
  // SET ELEMENT
  const [el1, setEl1] = useState(null);

  const [observer1, setObserver1] = useState(null);

  const [anim1, setPage1] = useState(false);

  const [blog, setBlogs] = useState([]);
  useEffect(() => {
    getDataBlogs()
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => {
        console.log("error fetching posts", error);
      });
  }, []);
  useEffect(() => {
    setEl1(document.querySelector("#first"));

    // observer.observe(el);
    const observer1 = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPage1(true);
          return;
        }
        // setPage1(false);
      },
      {
        root: null,
        threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
      }
    );
    setObserver1(observer1);
  }, []);

  if (observer1) {
    observer1.observe(el1);
  }

  const [boxStyle, setBoxStyle] = useState("hidden");

  useEffect(() => {
    if (anim1 === true) {
      let newStyle = "opacity-0 translate-y-32 ";
      setBoxStyle(newStyle);

      setTimeout(() => {
        newStyle = "opacity-100  translate-y-0";
        setBoxStyle(newStyle);
      }, 500);
    }
  }, [anim1]);
  const truncate = (str, max, len) => {
    return str.length > max ? str.substring(0, len) + "..." : str;
  };
  let bodyText = createBody(blog[0]?.body);
  const staticDesc = truncate(bodyText, 500, 500);
  const date = blog[0]?.publishedAt.split(/[/:\-T]/) ?? null;

  return (
    <div className=" h-full bg-background min-w-full flex min-h-screen flex-col  justify-between px-12 pt-[200px] text-textWhite">
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
              className={`transition-all duration-500  w-full h-full  lg:col-span-2 overflow-hidden ${
                anim1 ? "opacity-100" : "opacity-0"
              }`}
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
                  className={`transition-all duration-700 row-span-1 w-full h-full  grid pl-[20px] ${
                    anim1 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="self-center text-textWhite">
                    {date
                      ? `${date[0]}-${date[1]}-${date[2]} ${date[3]}:${date[4]}`
                      : ""}
                  </p>{" "}
                </div>
                <div
                  className={`transition-all duration-700 pl-[20px] row-span-1 w-full h-full  text-3xl text-slate-800 font-bold ${
                    anim1 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {blog[0]?.title}
                </div>
                <p
                  className={`transition-all duration-700 pl-[20px] row-span-2  ${
                    anim1 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {staticDesc}
                </p>
                <div
                  className={`  transition-all duration-1000 pl-[20px] grid row-span-1 w-full h-full  ${
                    anim1 ? "opacity-100" : "opacity-0"
                  }`}
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
          <div className="pt-6">
            <div className={`self-start   lg:w-[600px] h-auto  `}>
              <p className="text-[30px] lg:text-[60px] text-textWhite ">
                More Blog
              </p>
            </div>
            <div className="grid grid-cols-1 pt-6 lg:grid-cols-3 w-full h-full gap-3  border-t-2 border-secondary">
              {/* data?.slice(1, 4).map((index, i) => { */}
              {blog?.map((index, i) => {
                return (
                  <Link
                    href={`blog/${index?.slug}`}
                    key={i}
                    className={`transition-all duration-1500 grid justify-center ${boxStyle}`}
                  >
                    <BlogGrid data={index} indexData={i}></BlogGrid>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
