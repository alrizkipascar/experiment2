import Link from "next/link";
import { getDashboardBlog } from "../../../sanity/sanity-utils";
import createBody from "../Blogs/createBody";

async function getDataProjects() {
  try {
    const blogs = await getDashboardBlog();
    return blogs;
  } catch (error) {
    console.log("error fetching posts", error);
    return [];
  }
}

export default async function HeroBlog() {
  const dataBlog = await getDataProjects();
  let bodyText = createBody(dataBlog?.body);
  const truncate = (str, max, len) => {
    return str.length > max ? str.substring(0, len) + "..." : str;
  };
  let trunctext = truncate(bodyText, 500, 500);
  //   console.log("data", dataBlog?.body[0]?.children[0]?.text); ?.children[0]?.text

  return (
    <div className="blog-center  pt-10">
      <div className=" relative lg:flex w-[75%] h-screen  flex-row  text-textWhite bg-clip-border shadow-md">
        <div className="relative  w-[100%] h-[30%] lg:h-full lg:w-[70%] shrink-0 overflow-hidden lg:rounded-xl  bg-white bg-clip-border text-primary">
          <img
            src={`${
              dataBlog
                ? dataBlog?.imageUrl
                : "https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
            } `}
            alt="image"
            className="h-full w-full object-cover object-center "
          />
        </div>
        <div className="m-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-primary antialiased">
            Latest News
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-bold leading-snug tracking-normal  antialiased">
            {dataBlog?.title}
          </h4>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-primary antialiased">
            {trunctext}
          </p>

          <Link
            href={`blog/${dataBlog?.slug}`}
            className="button-fillup fill flex items-center"
            type="button"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
