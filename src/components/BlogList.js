export default function BlogList({ data }) {
  const truncate = (str, max, len) => {
    return str.length > max ? str.substring(0, len) + "..." : str;
  };

  const staticDesc = truncate(data?.description, 400, 400);
  return (
    <div className="grid grid-cols-3 w-full h-ful">
      <div className=" w-full h-full col-span-1">
        <img
          src={data?.src ?? ""}
          alt="lst"
          className="w-full h-full  object-cover   "
        ></img>
      </div>{" "}
      <div className="col-span-2 w-full h-1/2">
        <div className="grid grid-rows-5  w-full h-full ">
          <div className="row-span-1 w-full h-full  grid px-[20px] gap-3">
            <p className="self-center ">{data?.date ?? "null"}</p>{" "}
          </div>
          <div className="pl-[20px] row-span-1 w-full h-full  text-3xl text-slate-800 font-bold">
            {data?.text}
          </div>
          <p className="pl-[20px] pt-[20px] row-span-2  ">{staticDesc}</p>
        </div>
      </div>
    </div>
  );
}
