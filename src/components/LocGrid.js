export default function LocGrid({ data, indexData }) {
  return (
    <div className="image w-full h-full bg-secondary shadow-md rounded-xl duration-500 hover:shadow-xl ">
      <a href="#">
        <div className="overflow-hidden">
          <img
            src={data?.src}
            alt="Product"
            className="h-80 w-full object-cover rounded-t-xl duration-500 hover:scale-105 "
          />{" "}
        </div>
        <div className="px-4 py-3 w-full">
          <span className="text-primary mr-3 uppercase text-xs">
            Location Name
          </span>
          <p className="text-lg font-bold text-textWhite truncate block capitalize">
            {data?.text}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-textWhite cursor-auto my-3">
              {data?.location}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-textWhite cursor-auto my-3">
              {data?.description}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
