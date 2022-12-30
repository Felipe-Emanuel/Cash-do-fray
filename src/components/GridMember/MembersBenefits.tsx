import { ScrollAnimation } from "../../animations/ScrollAnimation/ScrollAnimation";
import { GridMap } from "./GridMap";
import { HeaderGridMember } from "./HeaderGridMember";

export function MembersBenefits() {
    return (
        <>
        
        <HeaderGridMember />
      <div className="flex flex-col m-auto text-center overflow-hidden">
      <ScrollAnimation dataAos="slide-left">
          
        <h2 className="font-semibold text-lg leading-10 mt-14">
          Benefícios de Assinantes
        </h2>
          </ScrollAnimation>
          <ScrollAnimation dataAos="flip-right">
          <img
          className="w-52 m-auto mt-4"
          src="../src/images/Member.png"
          alt="Nota membro runescape"
        />
          </ScrollAnimation>
       
       <GridMap />
      </div>
      </>

    )
}