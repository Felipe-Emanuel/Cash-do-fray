import { ReactNode, useEffect, useState } from "react";
import "aos/dist/aos.css";
import aos from "aos";
import ScrollTrigger from "react-scroll-trigger";

interface ScrollAnimationProps {
  children?: ReactNode;
  dataAos: string;
  className?: string;
}

export function ScrollAnimation({ children, dataAos }: ScrollAnimationProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    aos.init({ duration: 1000 });
  }, [visible]);

  const divAnimated = <div data-aos={dataAos}>{children}</div>

  return (
    //@ts-ignore
    <ScrollTrigger
      onEnter={() => setVisible(visible => !visible)}
      onExit={() => setVisible(visible => !visible)}
    >
      {visible ? divAnimated : divAnimated}
    </ScrollTrigger>
  );
}
