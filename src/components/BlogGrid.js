import Link from "next/link";

export default function BlogGrid({ data }) {
  const [yyyy, mm, dd, hh, mi] = data?.publishedAt.split(/[/:\-T]/);
  return (
    <Link href={`blog/${data?.slug}`} className={` grid justify-center `}>
      <div className="grid grid-rows-3 w-full h-auto  ">
        <div className=" w-full h-full row-span-2 overflow-hidden">
          <img
            src={data?.imageUrl}
            alt={data?.mainImageAlt}
            className="w-full h-full  object-cover   transform duration-700  hover:scale-105 "
          ></img>
        </div>{" "}
        <div className="row-span-1 w-full h-auto">
          <p className="self-center ">
            {dd}-{mm}-{yyyy} {hh}:{mi}
          </p>
          <div className="text-xl text-slate-800 font-bold">{data?.title}</div>
        </div>
      </div>
    </Link>
  );
}
