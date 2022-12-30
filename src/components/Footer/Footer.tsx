import { FacebookLogo, DiscordLogo } from "phosphor-react";

export function Footer() {
  return (
    <footer
      className="
        bg-FooterBg overflow-hidden text-white
        p-2
        md:px-12
        lg:px-24 
        xl:px-44
        2xl:px-64
        max-h-72 h-72
      "
    >
      <div className="flex pt-36">
        <div className="h-32 w-[50%] flex flex-col justify-between">
          <a href="#">
            <img
              src="../src/images/logo.png"
              alt="Cash do Fray logo"
              className="w-36 sm:w-48"
            />
          </a>

          <p className="text-[8px] sm:text-xs font-bold py-2">
            <span className="text-yellow-500">&copy;</span> 2022{" "}
            <a
              className="font-normal"
              href="https://www.linkedin.com/in/felipe-emanuel-/"
              target="_blank"
            >
              Felipe Emanuel
            </a>
          </p>
        </div>
        <div className="text-[8px] sm:text-xs h-32 w-[50%] flex justify-between">
          <div id="servicesList" className="flex flex-col justify-between">
            <h2 className="font-bold">Serviços</h2>
            <ul className="list-none">
              <li>
                <a
                  href="https://cashdofray.store/store/categoria-produto/buy-account-rs3/"
                  className="hover:text-yellow-500"
                >
                  Comprar contas RS3
                </a>
              </li>
              <li>
                <a
                  href="https://cashdofray.store/store/categoria-produto/buy-account-osrs/"
                  className="hover:text-yellow-500"
                >
                  Comprar contas OSRS
                </a>
              </li>
              <li>
                <a
                  href="https://cashdofray.store/store/produto/gold-rs3/"
                  className="hover:text-yellow-500"
                >
                  Comprar ouro RS3
                </a>
              </li>
              <li>
                <a
                  href="https://cashdofray.store/store/produto/gold-osrs/"
                  className="hover:text-yellow-500"
                >
                  Comprar ouro OSRS
                </a>
              </li>
            </ul>
            <a
              href="#"
              className="text-yellow-500 hover:text-white text-center"
            >
              Venda sua conta ou seu ouro com confiança
            </a>
          </div>
          <div id="ocialList">
            <h2 className="font-bold pb-2">Redes Sociais</h2>
            <ul className="list-none">
              <li>
                <a
                  href="https://www.facebook.com/cashdofray/"
                  className="hover:text-yellow-500 flex items-center"
                >
                  <FacebookLogo className="w-4" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com?utm_source=Discord%20Widget&utm_medium=Logo"
                  className="hover:text-yellow-500 flex items-center"
                >
                  <DiscordLogo className="w-4" />
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
