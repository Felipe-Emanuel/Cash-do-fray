import { useState } from "react";
import { CloseButton } from "../../animations/CloseButton/CloseButton";
import { PlayAnimation } from "../../animations/Play/PlayAnimation";
import { ScrollAnimation } from "../../animations/ScrollAnimation/ScrollAnimation";

export function ModalVideo() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  function handleClickToOpen() {
    setTimeout(() => {
      setIsVideoVisible((isVideoVisible) => !isVideoVisible);
    }, 1000);
  }

  function handleClickToClose() {
    setIsVideoVisible((isVideoVisible) => !isVideoVisible);
  }

  return (
    <ScrollAnimation dataAos="fade-right">
      {isVideoVisible ? (
        <div className="max-w-2xl w-full m-auto">
          <CloseButton handleClickToClose={() => handleClickToClose()} />
          <iframe
            className="
                h-[23rem] w-full rounded-xl m-auto shadow-2xl mt-8 lg:mt-16
                shadow-black ring-2 ring-yellow-500 max-w-2xl"
            src="https://www.youtube.com/embed/LK8feUxAz8c"
            title="YouTube video player"
            allowFullScreen
          />
        </div>
      ) : (
        <>
          {" "}
          <div
            className="
            bg-VideoBg bg-cover
            m-auto mt-14 md:mt-24
            ring-2 ring-yellow-500 w-full h-[23rem] max-w-2xl rounded-xl
            "
          >
            <div
              className="
                    h-[23rem] w-full rounded-xl m-auto
                    bg-black bg-opacity-75 max-w-2xl
                "
            >
              <div
                className="max-w-2xl m-auto h-[23rem] flex"
                onClick={() => handleClickToOpen()}
              >
                <PlayAnimation />
              </div>
            </div>
          </div>
        </>
      )}
    </ScrollAnimation>
  );
}
