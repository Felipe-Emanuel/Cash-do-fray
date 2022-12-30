import { useState } from "react";
import { DropDownComp } from "../DropDown/DropDownComp";
import { NavLink } from "./NavLink";

export const NavMobile = () => {
  const [isDropdwnActive, setIsDropdwnActive] = useState(false);

  const links = ["#início", "#sobre", "#feedback", "#membro", "#contato"];

  return (
    <div
      className="
        fixed bg-PrimaryColor inset-0 left-[15%] right-[15%] sm:mx-10 transition-colors
        text-center shadow-2xl font-default rounded-lg
        ring-1 ring-yellow-500 animate-appear

        sm:left-[50%] sm:right-0 top-20

        lg:hidden

        max-w-sm max-h-fit 
      "
    >
      <div className="py-[14vh] w-36 m-auto">
        <div className="relative -top-16">
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
          <div className="flex relative m-auto mt-4 w-20">
            <DropDownComp
              onClickOpenDropdown={() => {
                setIsDropdwnActive((isDropdwnActive) => !isDropdwnActive);
              }}
            />
          </div>
        </div>

        <img
          className=" m-auto lg:m-0"
          src="./src/images/logo.png"
          alt="Cash do Fray logo"
        />
      </div>
    </div>
  );
};
