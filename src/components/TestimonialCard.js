import { useEffect, useState } from "react";

const TestimonialCard = ({ anim1 }) => {
  const [boxStyle, setBoxStyle] = useState("hidden");

  useEffect(() => {
    if (anim1 === true) {
      let newStyle = "opacity-0 translate-y-32 ";
      setBoxStyle(newStyle);

      setTimeout(() => {
        newStyle = "opacity-100  translate-y-0";
        setBoxStyle(newStyle);
      }, 500);
    }
  }, [anim1]);
  return (
    <div className="flex-row w-auto lg:w-[1000px] h-auto lg:h-full ">
      <div
        className={`transition-all duration-1500  w-full h-1/4 gap-3 grid p-2 ${boxStyle}`}
      >
        <div className={`self-center justify-center text-center  ${boxStyle}`}>
          <p className="text-3xl text-black font-bold">Testimonials</p>
          <p className="">
            What (imaginary) people are saying about this site.
          </p>
        </div>
      </div>
      <div className="grid  lg:grid-cols-3 w-full h-3/4 gap-3 ">
        <div
          className={`transition-all duration-1500  w-full lg:w-full h-auto lg:h-full bg-cream ${boxStyle} `}
        >
          <div className="grid grid-rows-6  w-full h-full">
            <div className="w-full h-full row-span-2 grid grid-cols-5 ">
              <div className="w-full col-span-2 grid place-content-center p-2">
                <img
                  src="https://images.unsplash.com/profile-1676320214445-e3fec6f7b87cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                  alt="testi"
                  className="rounded-full object-contain 500 w-auto h-auto"
                ></img>
              </div>
              <div className={` w-full grid justify-left col-span-3 `}>
                <div className="self-center p-3">
                  <p className="text-2xl font-bold text-black">John Doe</p>
                  <p className="text-xl text-slate-800">Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="w-full grid h-full row-span-1 place-content-center   ">
              <div className="w-auto h-auto text-xl font-bold text-center">
                &quot;LOVE IT&quot;
              </div>
            </div>
            <div className="w-full h-full row-span-3 text-left text-xl text-slate-900 p-4">
              I really like this imaginary place, they tried their best to serve
              us customers
            </div>
          </div>
        </div>
        <div
          className={`transition-all duration-1000 w-auto lg:w-full lg:h-full bg-orangeCream  ${boxStyle} `}
        >
          {" "}
          <div className="grid grid-rows-6  lg:w-full lg:h-full">
            <div className="w-full h-full row-span-2 grid grid-cols-5">
              <div className="w-full col-span-2 grid place-content-center p-2">
                <img
                  alt="stst"
                  src="https://images.unsplash.com/profile-1491156934270-2c88cb8fff60?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                  className="rounded-full object-contain 500 w-auto h-auto"
                ></img>
              </div>
              <div className="w-full grid justify-left col-span-3">
                <div className="self-center p-3">
                  <p className="text-2xl font-bold text-black">Joe Over</p>
                  <p className="text-xl text-slate-800">Video Editor</p>
                </div>
              </div>
            </div>
            <div className="w-full grid h-full row-span-1 place-content-center ">
              <div className="w-auto h-auto text-xl font-bold text-center">
                &quot;Really comfortable&quot;
              </div>
            </div>
            <div className="w-full h-full row-span-3 text-left text-xl text-slate-900 p-4">
              I really like this imaginary place, they tried their best to serve
              us customers
            </div>
          </div>
        </div>
        <div
          className={`transition-all duration-1500 w-full h-full bg-cream   ${boxStyle} `}
        >
          {" "}
          <div className="grid grid-rows-6  w-full h-full">
            <div className="w-full h-full row-span-2 grid grid-cols-5 ">
              <div className="w-full col-span-2 grid place-content-center p-2">
                <img
                  alt="tst2"
                  src="https://images.unsplash.com/profile-1505896116223-c60402aa89aa?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                  className="rounded-full object-contain 500 w-auto h-auto"
                ></img>
              </div>
              <div className="w-full grid justify-left col-span-3">
                <div className="self-center p-3">
                  <p className="text-2xl font-bold text-black">Jane Doe</p>
                  <p className="text-xl text-slate-800">UX Designer</p>
                </div>
              </div>
            </div>
            <div className="w-full grid h-full row-span-1 place-content-center   ">
              <div className="w-auto h-auto text-xl font-bold text-center">
                &quot;Really quiete and clean!&quot;
              </div>
            </div>
            <div className="w-full h-full row-span-3 text-left text-xl text-slate-900 p-4">
              This place is great working environment, the staff and people who
              rent this place is nice.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
