import { ReactNode, useState } from "react";
import { TransitionLogo } from "../../animations/TransitionLogo/TransitionLogo";
import { DropDownComp } from "../DropDown/DropDownComp";
import { NavLink } from "./NavLink";
import { NavMobile } from "./NavMobile";

interface NavBarProps {
  isOverlay?: boolean;
  menuChanges?: ReactNode;
  closingOnBlur?: any;
}

export function NavBar({ isOverlay, menuChanges, closingOnBlur }: NavBarProps) {
  const [isMobile, setIsMobile] = useState(isOverlay);
  const [isDropdwnActive, setIsDropdwnActive] = useState(false);

  const links = ["#início", "#sobre", "#feedback", "#membro", "#contato"];

  const handleBlur = () => {
    setTimeout(() => {
      setIsMobile((isMobile) => !isMobile);
      closingOnBlur();
    }, 300);
  };

  return (
    <>
      <header
        className="
          bg-PrimaryColor fixed w-full h-24 text-white ring-1 ring-yellow-500
          drop-shadow-2xl z-50
          px-8 py-2
          md:px-12
          lg:px-24 
          xl:px-44
          2xl:px-64
        "
      >
        {isMobile && (
          <div onClick={() => handleBlur()}>
            <NavMobile />
          </div>
        )}
        <div onClick={() => setIsMobile((isMobile) => !isMobile)}>
          {menuChanges}
        </div>
        <img
          className=" m-auto lg:m-0"
          src="./src/images/logo.png"
          alt="Cash do Fray logo"
        />
        <TransitionLogo />
        <p className="text-center mt-3 m-auto lg:hidden font-default">
          O barato sai caro
        </p>
        <nav className="lg:flex flex-wrap gap-8 hidden items-center w-full">
          {links.map((link) => {
            const normalization = link
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase()
              .replace(/\s/g, "");
            const normalized = normalization;
            return (
              <NavLink key={link} content={link.split("#")} link={normalized} />
            );
          })}
          <DropDownComp
            onClickOpenDropdown={() => {
              setIsDropdwnActive((isDropdwnActive) => !isDropdwnActive);
            }}
            isActive={isDropdwnActive}
          />
        </nav>
      </header>
    </>
  );
}
