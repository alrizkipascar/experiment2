"use client";
import { kanit } from "@/app/fonts";
import { useEffect, useState } from "react";

import { useParams } from "next/navigation";
import { getBlog } from "../../../../sanity/sanity-utils";
import createBody from "@/components/Blogs/createBody";
import Loading from "./loading";

const kanit_fonts = kanit;
// export const runtime = "edge";

async function getDataBlog(slug) {
  try {
    const blogs = await getBlog(slug);
    return blogs;
  } catch (error) {
    console.log("error fetching posts", error);
  }
}

export default function Blog() {
  const router = useParams();
  const { slug } = router;
  const [blog, setBlogs] = useState([]);

  useEffect(() => {
    getDataBlog(slug)
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => {
        console.log("error fetching posts", error);
      });
  });

  let bodyFirst = "";
  let bodyAfter = "";
  let blogDate = null;
  let blogTime = null;
  if (blog) {
    if (blog?.parallaxImage) {
      bodyFirst += createBody(blog?.body);
      bodyAfter += createBody(blog?.bodyParallax);
      blogDate = new Date(blog?.publishedAt);
    } else {
      bodyFirst += createBody(blog?.body);
      bodyFirst += createBody(blog?.bodyParallax);
    }
    let newDate = new Date(blog?.publishedAt);
    blogDate = newDate.toDateString();
    blogTime = newDate.toLocaleTimeString();
  }
  if (blog.length == 0) {
    return (
      <div className="w-screen box-border">
        <Loading />{" "}
      </div>
    );
  }
  return (
    <section className="bg-background w-full h-full text-textWhite">
      <div className="pt-[200px]">
        <article
          className="bg-header flex items-center justify-center h-[600px] pb-12"
          style={{
            backgroundImage: `url(${blog?.imageUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          alt={blog?.mainImageAlt}
        >
          <div className="bg-background text-textWhite font-serif mx-4 p-4 text-center md:p-8">
            <p className="italic text-sm">{blogDate + " " + blogTime}</p>
            <h1 className="text-5xl uppercase">{blog?.title}</h1>
            <p className="text-lg">Author Name</p>
          </div>
        </article>

        <div className="font-serif leading-normal mx-auto py-12 px-4 max-w-lg">
          {bodyFirst.split("\n").map((index, i) => (
            <p
              className="mb-4 text-lg"
              dangerouslySetInnerHTML={{ __html: index }}
              key={i}
            ></p>
          ))}{" "}
        </div>

        {blog?.parallaxImage ? (
          <>
            <div
              className="bg-quote  flex items-center justify-center h-screen mx-auto"
              style={{
                backgroundImage: `url(${blog?.parallaxImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              alt={blog?.parallaxImageAlt}
            >
              <blockquote className="bg-white font-serif mx-4 p-4 text-center text-black md:p-8">
                <p className="font-bold italic text-3xl">
                  &ldquo;{blog?.parallaxImageText}&rdquo;
                </p>
              </blockquote>
            </div>
            <div className="font-serif leading-normal mx-auto py-12 px-4 max-w-lg  text-textWhite">
              <p
                dangerouslySetInnerHTML={{ __html: bodyAfter ?? "" }}
                className="mb-4 text-lg"
              />
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
