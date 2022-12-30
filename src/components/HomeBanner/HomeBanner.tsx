import { Coins, ShoppingCart } from "phosphor-react";
import { LinkButton } from "../LinkButton/LinkButton";

export function HomeBanner() {
  return (
    <section className="sm:w-96 h-fit pt-24 md:pt-32 cursor-default">
      <h1 className="text-white text-lg font-semibold leading-10 text-center mb-8">
        Voe mais alto com o Fray
      </h1>
      <p className="text-sm leading-6 text-center">
        Você está com dificuldade de conseguir recursos em OSRS ou RS3? Conte
        com o{" "}
        <span
          className="
                    hover:before:bg-white
                    hover:before:skew-y-3 before:transition-all before:transform
                    before:duration-300 before:block before:absolute before:-inset-1
                    before:-skew-y-3 before:bg-yellow-500 relative inline-block
                "
        >
          <span className="relative text-white hover:text-yellow-500">
            Cash do Fray
          </span>
        </span>{" "}
        para te ajudar a progredir nesse jogo viciante.
      </p>
      <div className="text-center mt-10 m-auto">
        <LinkButton to="#" icon={<Coins />} content="Comprar ouro OSRS" />
        <LinkButton
          to="#"
          icon={<ShoppingCart />}
          content="Comprar conta OSRS"
        />
        <LinkButton to="#" icon={<Coins />} content="Comprar ouro RS3" />
        <LinkButton
          to="#"
          icon={<ShoppingCart />}
          content="Comprar conta RS3"
        />
      </div>
    </section>
  );
}
