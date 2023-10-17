import { getAboutContent } from "../../../sanity/sanity-utils";
import { kanit } from "../fonts";

const kanit_fonts = kanit;
getAboutContent;

async function getAbout() {
  try {
    const blogs = await getAboutContent();
    return blogs;
  } catch (error) {
    console.log("error fetching posts", error);
  }
}

export default async function About() {
  const aboutContent = await getAbout();
  return (
    <section className="bg-background w-full h-auto">
      <div className=" mx-auto pt-[200px] text-textWhite">
        <div className="flex flex-wrap items-center">
          <div className="w-[100%] md:w-6/12 lg:w-4/12 px-12 md:px-4 lg:mr-auto lg:ml-auto -mt-78">
            <div className="relative flex flex-col min-w-0 break-words bg-secondary w-full mb-6 shadow-lg rounded-lg ">
              <img
                alt={aboutContent?.alt ?? "none"}
                src={
                  aboutContent?.image ??
                  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80"
                }
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  {/* <polygon
                    points="-30,95 583,95 583,65"
                    className="text-secondary fill-current"
                  ></polygon> */}
                </svg>
                <h1
                  className={`${kanit_fonts.className} text-[24px] lg:text-[30px] font-bold text-white`}
                >
                  {aboutContent?.title ?? "none"}
                </h1>
                <p className="text-[15px] lg:text-[20px] font-light mt-2 text-white">
                  {aboutContent?.explanation ?? "none"}
                </p>
              </blockquote>
            </div>
          </div>

          <div className="w-full md:w-6/12 px-4 lg:mr-auto">
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 px-4">
                <div className="relative flex flex-col mt-4">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                        />
                      </svg>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                      {aboutContent?.contenTitle1 ?? "none"}
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                      {aboutContent?.content1 ?? "none"}
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                        />
                      </svg>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                      {aboutContent?.contenTitle3 ?? "none"}
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                      {aboutContent?.content3 ?? "none"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 mt-4">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                        />
                      </svg>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                      {aboutContent?.contenTitle2 ?? "none"}
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                      {aboutContent?.content2 ?? "none"}
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        />
                      </svg>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                      {aboutContent?.contenTitle4 ?? "none"}
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                      {aboutContent?.content4 ?? "none"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
