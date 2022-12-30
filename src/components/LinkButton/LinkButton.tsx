import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LinkButtonProps {
  content: string;
  icon: ReactNode;
  to?: string;
  className?: string;
}
export function LinkButton({
  content,
  icon,
  className,
  to
}: LinkButtonProps) {
  return (
    <Link to={to}>
      <button
      className={`${className} transition-all ring-1 uppercase text-xs
      ring-white bg-white hover:bg-PrimaryColor w-52 md:w-64 pb-3 mb-4
      rounded-full hover:text-white text-PrimaryColor font-semibold mx-1
      focus:bg-yellow-500
      `}
    >
      <span className="relative -right-3 top-4">{icon}</span>
        {content}
    </button>
    </Link>

  );
}
