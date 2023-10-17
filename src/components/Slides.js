import { kanit } from "@/app/fonts";

const Slides = ({ data, indexData, stylesSlide }) => {
  const kanis_font = kanit;
  return (
    <div
      className={` w-full h-full overflow-hidden bg-red-100  items-center justify-center flex `}
    >
      <div className="w-full h-full grid grid-cols-2 gap-2">
        <div>
          <img
            src={data[indexData]?.src}
            alt="Picture of benefits"
            className={`${stylesSlide} animate-fadeIn transition-all duration-300 object-cover  bg-cream h-full w-full `}
          ></img>
        </div>
        <div
          className={`${stylesSlide} self-center block transition-all duration-300 text-black`}
        >
          <h1 className={`${kanis_font.className} text-4xl`}>
            {data
              ? data[indexData]?.text
              : "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}
          </h1>
          <p className="text-left">
            {data
              ? data[indexData]?.description
              : "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slides;
