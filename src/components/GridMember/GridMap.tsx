import { ScrollAnimation } from "../../animations/ScrollAnimation/ScrollAnimation";
import { GridMember } from "./GridMember";

export function GridMap() {
  const tltes = [
    "Personalização de Avatar",
    "Acesso ao Mundo do Jogo",
    "Transporte e Navegação",
    "Suporte ao Cliente",
  ];
  return (
    <>
      <div className="md:grid md:grid-rows-2 md:grid-flow-col lg:grid-rows-1 gap-4">
        {tltes.map((title) => {
          return (
            <ScrollAnimation key={title} dataAos="fade-right">
              <GridMember title={title} />
            </ScrollAnimation>
          );
        })}
      </div>
    </>
  );
}
