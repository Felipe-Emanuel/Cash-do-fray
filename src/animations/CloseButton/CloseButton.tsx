import { useLottie } from "lottie-react";
import CloseButtonAnimation from "./CloseButton.json";

export const CloseButton = ({ handleClickToClose }: any) => {
  const options = {
    animationData: CloseButtonAnimation,
    autoplay: true,
    loop: 0,
  };

  const { View } = useLottie(options);

  return (
    <button
      onClick={() => handleClickToClose()}
      className="
        scale-110 relative flex top-6 -left-6
        lg:top-12 border-2 drop-shadow-FeedBackBox
        border-yellow-300 bg-white rounded-full
      "
      aria-label="Botão de fechamento de vídeo"
    >
      {View}
    </button>
  );
};
