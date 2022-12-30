import { ScrollAnimation } from "../../animations/ScrollAnimation/ScrollAnimation";
import { FeedBackBox } from "./FeedBackBox";

export function Grid() {
  return (
    <>
      <div className="m-auto text-center flex flex-col">
        <ScrollAnimation dataAos="fade-down">
          <h1 className="font-semibold sm:text-lg leading-10 mb-4">
            Com a confiança de mais de 1000 clientes
          </h1>
        </ScrollAnimation>
        <ScrollAnimation dataAos="fade-right">
          <p className="text-sm font-light text-gray-700 mb-8">
            O que as pessoas dizem sobre o{" "}
            <span className="text-yellow-500 font-normal">Fray</span>
          </p>
        </ScrollAnimation>
      </div>
      <section className="sm:grid sm:grid-rows-5 lg:grid-rows-3 grid-flow-col gap-4">
        <FeedBackBox
          title="Igor Machado"
          content="Compra segura 100%... Entrega rápida!"
        />
        <FeedBackBox
          title="Andrey Gomes"
          content="Rápido e fácil, 100% confiável, recomendo."
        />
        <FeedBackBox
          title="Gabriel Teles"
          content="Ótimo atendimento, rep+++"
        />
        <FeedBackBox
          title="Caio Vinicius"
          content="O cara eh top, obrigado fray"
        />
        <FeedBackBox title="Carlos Maia" content="Rápida e sem enrolação." />
        <FeedBackBox
          title="Leandro Rodrigues"
          content="Ótimo trabalho e rápido"
        />
        <FeedBackBox
          title="Lucas Passos"
          content="Rápido e sem complicação..."
        />
        <FeedBackBox
          title="Vitor Gomes"
          content="Só vou comprar com o fray agora"
        />
        <FeedBackBox
          title="Victor Bitencourt"
          content="Vendi 200m super rapido e facil"
        />
      </section>
    </>
  );
}
