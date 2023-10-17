// "use client";
// import React, { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

export default function DashboardProduct({ data, id }) {
  // useEffect(() => {}, []);
  let title = "";
  let body = data?.body[0]?.children[0]?.text;
  const [yyyy, mm, dd, hh, mi] = data?._createdAt.split(/[/:\-T]/);
  const photo = [];
  if (id == 1) {
    photo.push(
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80"
    );
    photo.push(
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2124&q=80"
    );
    let text = "Clothing line up for example title for company Gucci maybe?";
    const myArray = text.split(" ");
    function createBR(item, index, arr) {
      if (index % 5 != 0 || index == 0) {
        title += " " + item + " ";
      } else {
        title += " \n " + item;
      }
    }
    myArray.forEach(createBR);
  }
  if (id == 2) {
    photo.push(
      "https://images.unsplash.com/photo-1516727003284-a96541e51e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    );
    photo.push(
      "https://images.unsplash.com/photo-1520423465871-0866049020b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    );
    let text = "Color clothing theme project, make your day colorful!";
    const myArray = text.split(" ");
    function createBR(item, index, arr) {
      if (index % 5 != 0 || index == 0) {
        title += " " + item + " ";
      } else {
        title += " \n " + item;
      }
    }
    myArray.forEach(createBR);
  }

  return (
    <div className="w-full h-full lg:h-[650px] grid  grid-rows-5 border-y border-secondary pt-10 pb-10">
      <div className="row-span-1 pl-20  items-center w-full h-full gap-3 ">
        <div className="flex-row w-full h-full lg:grid lg:grid-cols-6">
          <div className="  grid grid-cols-3 lg:col-span-1 w-auto h-auto lg:w-full lg:h-full">
            {data?.tags?.map((index, i) => {
              return (
                <div key={i} className="flex  gap-1 items-center ">
                  <div
                    className={`rounded-full w-2 h-2 
                   
                    `}
                    style={{
                      backgroundColor:
                        index?.color ??
                        "rgb(127 124 108 / var(--tw-bg-opacity))",
                    }}
                  ></div>{" "}
                  <div>{index?.tags ?? "tags"}</div>
                </div>
              );
            })}
          </div>
          <div className="lg:col-span-3 whitespace-pre-line">
            <div className=" w-full h-full ">
              <Link href={`/projects/${data?.slug}`}>
                <h1 className="dashboard-title-section fromLeft text-[25px] lg:text-[30px] ">
                  {data?.title ?? "None"}
                  {/* Expand from <br />
              left with <br />
              multiple line */}
                </h1>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2 ">
            <div className="w-full h-full mr-10 ">
              Release Date: {dd}-{mm}-{yyyy} {hh}:{mi}
            </div>
          </div>
        </div>
      </div>
      <div className="row-span-4 items-center w-full h-auto pt-16 lg:pt-0">
        <div className="flex-row w-full h-full lg:grid lg:grid-cols-6 gap-3 lg:px-10">
          {" "}
          <div className="lg:col-span-1 w-auto h-auto lg:w-[100%] lg:h-[100%]"></div>
          <div className="lg:col-span-3  w-[100%] h-[75%] lg:w-full lg:h-full ">
            {/* <div className="w-full group h-full"> */}
            <div className="relative m-0 w-[100%] h-[100%] lg:w-full lg:h-full overflow-hidden duration-500 t  hover:shadow-xl ">
              <img
                className="absolute object-cover object-center w-full lg:w-[100%] lg:h-[100%]  transform duration-700  hover:scale-105"
                src={data?.mainImage ?? null}
                alt="Project 2"
              />
            </div>
            {/* </div>{" "} */}
          </div>
          <div className="lg:col-span-2 w-[100%] h-[100%] lg:w-full lg:h-full ">
            {" "}
            <div className="hidden lg:block group relative m-0 w-[100%] h-[50%] lg:w-full lg:h-full ">
              <div className="relative  w-full h-full overflow-hidden ">
                <img
                  className="absolute object-cover object-center w-full  transform duration-1000 backdrop-opacity-100"
                  src={data?.imagesGallery[0]?.url ?? null}
                  alt="Project 1"
                />
                <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
                <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-full group-hover:-inset-y-0">
                  <div className="absolute w-full flex place-content-center">
                    <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">
                      {data?.title ?? "None"}
                    </p>
                  </div>
                  <div className="absolute w-full flex place-content-center mt-20">
                    <p className="font-sans text-center w-4/5 text-white mt-5">
                      {body ?? "None"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
