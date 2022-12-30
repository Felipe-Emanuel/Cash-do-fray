import { ReactNode } from "react";
import { ScrollAnimation } from "../../animations/ScrollAnimation/ScrollAnimation";

interface FeedBackBoxProps {
  title: ReactNode;
  content: any;
}

export function FeedBackBox({ title, content }: FeedBackBoxProps) {
  return (
    <ScrollAnimation dataAos="fade-up">
      <div
        className="hover:bg-PrimaryColor hover:text-white transition-all hover:scale-105
        m-auto p-8 mb-8 rounded-xl drop-shadow-FeedBackBox bg-white
        sm:w-64 max-w-xs
        "
      >
        <h2 className="text-base font-semibold">{title}</h2>
        <p className="text-sm font-light bg-opacity-50 h-10 w-full leading-4">
          {content}
        </p>
        <div className="text-yellow-500 text-sm mt-2">★★★★★</div>
      </div>
    </ScrollAnimation>
  );
}
