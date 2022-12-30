import { useLottie } from "lottie-react";
import { useEffect } from "react";
import MenuOpen from "./MenuOpen.json";

interface MenuOpenedProps {
  isClose?: boolean;
  onClick?: any;
}

export const MenuOpened = ({ isClose, onClick }: MenuOpenedProps) => {
  useEffect(() => {
    isClose === false ? setDirection(-1) : setDirection(1);
    play();
  }, [isClose]);

  const options = {
    animationData: MenuOpen,
    autoplay: false,
    loop: 0,
  };

  const { View, play, setDirection } = useLottie(options);
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className="right-0 top-5 absolute w-16 lg:hidden z-50"
      aria-label="Menu Mobile"
    >
      {View}
    </button>
  );
};
