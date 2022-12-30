import { ScrollAnimation } from "../animations/ScrollAnimation/ScrollAnimation";
import { ContainerLigth } from "../components/Container/ContainerLigth";

export function Contact() {
  return (
    <ContainerLigth id="contato">
      <ScrollAnimation dataAos="fade-down">
        <h1 className="my-10 font-semibold h-11 text-[28px] sm:text-lg text-center mb-32 md:mb-16">
          Junte-se à nossa comunidade
        </h1>
      </ScrollAnimation>
      <ScrollAnimation dataAos="fade-right">
        {/* @ts-ignore */}
        <iframe
          className="w-full max-w-4xl m-auto flex h-[23rem] mb-16"
          src="https://discord.com/widget?id=946021366153478185&amp;theme=dark"
        />
      </ScrollAnimation>
    </ContainerLigth>
  );
}
