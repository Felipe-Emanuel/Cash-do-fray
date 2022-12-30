import { ScrollAnimation } from "../../animations/ScrollAnimation/ScrollAnimation";

export function HeaderGridMember() {
  return (
    <div className="m-auto text-center py-8">
      <ScrollAnimation dataAos="fade-right">
        <h1 className="font-semibold text-[30px] sm:text-lg leading-10 sm:w-[75vw] m-auto">
          Nunca perca os conteúdos mais recentes
        </h1>
      </ScrollAnimation>

      <ScrollAnimation dataAos="zoom-in">
        <p className="text-base font-light my-4">
          Junte-se à nossa comunidade de membros e ganhe acesso a uma variedade
          enorme de benefícios e conteúdos exclusivos.
        </p>
      </ScrollAnimation>
      <ScrollAnimation dataAos="fade-right">
        <div className="w-full h-1 bg-yellow-500" />
      </ScrollAnimation>
    </div>
  );
}
