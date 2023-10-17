export default function Hero() {
  return (
    <section className="flex flex-wrap md:items-center h-auto pb-10">
      {" "}
      <div className="bg-red-600 w-full md:w-1/2 h-[50%] lg:h-screen">
        <img
          src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
          className="h-[50%] lg:h-screen w-full"
          alt=""
        />
      </div>
      <div className="bg-background w-full md:w-1/2 h-[50%] lg:h-screen">
        <div className="mx-6 lg:mx-32">
          <h1 className="text-textWhite pt-20 pb-10 text-6xl font-bold mt-16">
            Logo
          </h1>

          {/* <!-- country region island --> */}
          <div className="flex mt-16 font-light text-gray-500">
            <div className="pr-4">
              <span className="uppercase">Clothing</span>
              <p className="text-2xl text-accent font-semibold pt-2">Modern</p>
            </div>
            <div className="pr-4">
              <span className="uppercase">Design</span>
              <p className="text-2xl text-accent font-semibold pt-2">Formal</p>
            </div>
            <div className="pr-4">
              <span className="uppercase">Photography</span>
              <p className="text-2xl text-accent font-semibold pt-2">Wild</p>
            </div>
          </div>
          {/* 
          <!-- description --> */}
          <div className="description w-full sm: md:w-2/3 mt-16 text-accent text-[15px] lg:text-[25px]">
            Tokyo, Japan’s busy capital, mixes the ultramodern and the
            traditional, from neon-lit skyscrapers to historic temples. The
            opulent Meiji Shinto Shrine is known for its towering gate and
            surrounding woods. The Imperial Palace sits amid large public
            gardens
          </div>

          {/* <button className="uppercase mt-5 text-sm font-semibold hover:underline">
            read more
          </button> */}
        </div>
      </div>
    </section>
  );
}
