export default function PhotoGrid({ data }) {
  return (
    <div className="w-full h-auto  ">
      <div className=" w-full h-full row-span-2 overflow-hidden">
        <img
          src={data?.url}
          alt={"photo project"}
          className="w-full h-full  object-cover   transform duration-700  hover:scale-105 "
        ></img>
      </div>{" "}
    </div>
  );
}
