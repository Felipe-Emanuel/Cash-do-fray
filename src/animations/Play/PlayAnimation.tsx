import { useLottie } from "lottie-react";
import { useEffect, useState } from "react";
import Play from "./Play.json";

export const PlayAnimation = () => {
  const [isPlay, setIsPlay] = useState(true);
  const time = 300;

  const options = {
    animationData: Play,
    autoplay: false,
    loop: 0,
  };
  const { View, play, stop } = useLottie(options);

  useEffect(() => {
    isPlay === true ? stop() : play();
  }, [isPlay]);

  const handleClickToPlay = () => {
    setIsPlay((isPlay) => !isPlay);

    setTimeout(() => {
      setIsPlay(false);
    }, time);

    return () => {
      clearTimeout(time);
    };
  };

  return (
    <button
      onClick={() => handleClickToPlay()}
      className="m-auto"
      aria-label="Menu Mobile"
    >
      {View}
    </button>
  );
};
