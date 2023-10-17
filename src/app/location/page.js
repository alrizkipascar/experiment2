import LocGrid from "@/components/LocGrid";
import { getLocation } from "../../../sanity/sanity-utils";

export default async function Location() {
  // SET ELEMENT
  const location = await getLocation();
  return (
    <div
      id="first"
      className="snap-start w-auto h-auto lg:h-screen shrink-0 min-w-full flex min-h-screen flex-col items-center justify-between p-6 lg:p-24"
    >
      <div className=" w-full h-full">
        <div
          className={`self-start pt-[100px] lg:pt-[150px] w-full lg:w-[450px] h-auto border-b-2 border-slate-900`}
        >
          <p className="text-5xl text-textWhite  ">Our Location</p>
        </div>
        <div className="h-2/3 w-full  pt-4">
          <div className="grid lg:grid-cols-2 gap-5 w-full h-full  ">
            {location?.map((index, i) => {
              return (
                <div key={i} className={`transition-all duration-1000 `}>
                  <LocGrid data={index} indexData={i}></LocGrid>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
