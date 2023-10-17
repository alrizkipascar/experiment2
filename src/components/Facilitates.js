import { useState } from "react";
import Slides from "./Slides";
import ButtonFacilitates from "./ButtonFacilitates";

const Facilitates = ({ anim }) => {
  const CarouselData = [
    {
      id: 0,
      text: "Workspace with complete feature",
      src: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDYzNDB8MHwxfHNlYXJjaHwyfHx3b3Jrc3BhY2V8ZW58MHx8fHwxNjk1NTg1MzYyfDA&ixlib=rb-4.0.3&q=80&w=1080",
      description:
        "Et duis dolore proident aliquip fugiat laborum pariatur. Ipsum ex quis veniam sunt ipsum ut velit nisi ex. Esse deserunt ut est ea do laboris et ad proident in duis cupidatat non. Amet officia anim anim nulla tempor nostrud.",
    },
    {
      id: 1,
      text: "Presentation room",
      src: "https://images.unsplash.com/photo-1552581234-26160f608093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDYzNDB8MHwxfHNlYXJjaHw0fHx3b3JraW5nJTIwdGVhbXxlbnwwfHx8fDE2OTU0Nzk0MTN8MA&ixlib=rb-4.0.3&q=80&w=1080",
      description:
        "Mollit Lorem laboris culpa ad laborum cillum minim laborum adipisicing adipisicing elit. Mollit sit duis reprehenderit excepteur Lorem ipsum eiusmod velit. Dolor cupidatat excepteur amet Lorem ex fugiat. Fugiat est sit velit anim ullamco excepteur labore sunt deserunt adipisicing dolor velit laborum. Ex consequat ad fugiat Lorem ea ea adipisicing.",
    },
    {
      id: 2,
      text: "Food or Cafe service",
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDYzNDB8MHwxfHNlYXJjaHw4fHxjYWZlfGVufDB8fHx8MTY5NTU4NTExM3ww&ixlib=rb-4.0.3&q=80&w=1080",
      description:
        "Tempor deserunt duis incididunt aute dolor sunt adipisicing consequat enim non laborum. Nostrud eu deserunt officia cupidatat pariatur ut veniam eu ex. Esse cillum fugiat eiusmod qui voluptate est ea adipisicing dolor velit aliqua nisi cillum non.",
    },
  ];
  const [currentSlide, setcurrentSlide] = useState({
    index: 0,
    style: "block",
    boxStyle: " translate-x-0",
  });
  const [boxStyle, setBoxStyle] = useState("");

  const actionButton = (index) => {
    let newIndex = null;
    let newStyle = null;
    if (currentSlide?.index == null) {
      newIndex = index;
      newStyle = "opacity-0 h-0 translate-y-32 ";
      setcurrentSlide({ index: newIndex, style: newStyle });
      newStyle = "opacity-100 h-auto translate-y-0";
      setTimeout(() => {
        setcurrentSlide({ index: newIndex, style: newStyle });
      }, 150);
    }
    if (currentSlide?.index != null && currentSlide?.index < index) {
      newIndex = index;
      newStyle = "opacity-0 -translate-x-1/4 ";
      setBoxStyle(newStyle);

      setTimeout(() => {
        newStyle = "opacity-0 translate-x-2/4 ";

        setBoxStyle(newStyle);
        setcurrentSlide({ index: newIndex });
      }, 250);
      setTimeout(() => {
        newStyle = "opacity-100 translate-x-0";
        setBoxStyle(newStyle);
      }, 500);
    }
    if (currentSlide?.index != null && currentSlide?.index > index) {
      newIndex = index;

      newStyle = "opacity-0 translate-x-1/4 ";
      setBoxStyle(newStyle);

      setTimeout(() => {
        newStyle = "opacity-0 -translate-x-2/4 ";

        setBoxStyle(newStyle);
        setcurrentSlide({ index: newIndex });
      }, 250);
      setTimeout(() => {
        newStyle = "opacity-100  translate-x-0";
        setBoxStyle(newStyle);
      }, 500);
    }
  };
  return (
    <div className="  w-full h-full lg:h-full  text-white">
      <div
        className={`${
          currentSlide?.style
        } transition-all duration-1500 w-full h-3/4 transform  ${
          anim ? "opacity-100  animate-fadeIn" : "opacity-0 "
        }`}
      >
        <Slides
          data={CarouselData}
          stylesSlide={boxStyle}
          indexData={currentSlide?.index}
          //   onClose={onClose}
          //   onNext={onNext}
          //   onPrev={onPrev}
          actionButton={actionButton}
        />
      </div>
      <div
        className={`transition-all duration-1500 overflow-hidden items-center h-auto justify-center mx-auto w-auto lg:w-full  grid grid-cols-3  gap-6  ${
          anim ? "opacity-100 " : "opacity-0 "
        }`}
      >
        {CarouselData?.map((index, i) => {
          return (
            <div key={i} className="grid">
              <button>
                <ButtonFacilitates
                  actionButton={actionButton}
                  activeIndex={currentSlide?.index}
                  data={index}
                  indexData={i}
                ></ButtonFacilitates>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Facilitates;
