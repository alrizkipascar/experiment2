const ButtonFacilitates = ({ data, indexData, actionButton, activeIndex }) => {
  return (
    <div
      onClick={() => actionButton(indexData)}
      className={`${
        activeIndex == indexData ? "border-b" : ""
      }   hover:bg-orange-700  transition-all ease-out duration-300 xl:w-auto h-16   border-orange-700`}
    >
      {/* {children} */}
      <div
        // data-class-in="translate-y-0 opacity-1 h-auto"
        // data-class-out="translate-y-32 opacity-0 h-0"
        className="h-auto w-auto transition transform duration-700"
      >
        {/* <div className="hover:scale-100 ease-in-out hover:duration-150 border-t border-r border-slate-700 hover:bg-gray-800 hover:border-slate-600  w-full h-60 rounded-lg  text-slate-50 bg-black transition duration-1000  hover:-translate-y-1 "> */}
        <div className="w-full h-auto grid justify-center">
          <div className="flex">
            <h1
              className={`${
                activeIndex == indexData ? "text-orange-700" : "text-black"
              } text-md `}
            >
              {indexData ? indexData + 1 : 1} /
            </h1>
            <p
              className={`${
                activeIndex != indexData ? "text-slate-600" : "text-black"
              } text-md `}
            >
              {data ? data?.text : "Focus"}
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ButtonFacilitates;
