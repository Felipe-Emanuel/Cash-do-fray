import { ScrollAnimation } from "../../animations/ScrollAnimation/ScrollAnimation";

export function AboutDialog() {
  return (
    <ScrollAnimation dataAos="fade-left">
      <div className="px-8 cursor-default w-full mt-16 lg:pt-7">
        <p className="uppercase text-xs font-light text-yellow-600 leading-3 tracking-[2px] pb-2">
          negociação segura
        </p>
        <h1 className="sm:text-lg font-semibold sm:leading-10 pb-5 sm:w-72">
          Apenas contas genuínas
        </h1>
        <p className="text-sm leading-5 pb-5">
          Por que você deve confiar em nós?
        </p>
        <p className="text-sm font-light text-gray-700 leading-7 pb-5">
          Todas as contas passam por uma rigorosa análise de segurança e
          diversas medidas protetivas são tomadas...{" "}
          <span
            className="
                    hover:before:bg-PrimaryColor
                    hover:before:skew-y-3 before:transition-all before:transform
                    before:duration-300 before:block before:absolute before:-inset-1
                    before:-skew-y-3 before:bg-yellow-500 relative inline-block
                "
          >
            <span className="relative text-white hover:text-yellow-500">
              Cash do Fray
            </span>
          </span>{" "}
          , você conhece, você confia!
        </p>
        <img src="../src/images/StayHome.png" />
      </div>
    </ScrollAnimation>
  );
}
