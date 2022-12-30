// index.jsx
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CaretUp, CaretDown } from "phosphor-react";

export function DropDownComp({ isActive, onClickOpenDropdown }: any) {
  return (
    <DropdownMenu.Root onOpenChange={() => onClickOpenDropdown()}>
      <DropdownMenu.Trigger className="text-sm uppercase font-semibold flex items-center gap-2">
        Contas
        {isActive ? <CaretUp /> : <CaretDown />}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="text-white text-center rounded shadow-2xl shadow-black p-4 px-8 bg-PrimaryColor w-fit font-default z-50">
          <DropdownMenu.Label>OSRS</DropdownMenu.Label>
          <DropdownMenu.Item className="DropdownMenuItem">
            <a
              className="hover:text-white text-yellow-500 transition-all"
              href="https://cashdofray.store/store/categoria-produto/buy-account-osrs/"
            >
              Comprar contas OldSchool
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            <a
              className="hover:text-white text-yellow-500 transition-all"
              href="https://cashdofray.store/store/categoria-produto/buy-account-osrs/"
            >
              Venda sua conta Oldschool
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Label>RS3</DropdownMenu.Label>
          <DropdownMenu.Item className="DropdownMenuItem">
            <a
              className="hover:text-white text-yellow-500 transition-all"
              href="https://cashdofray.store/store/categoria-produto/buy-account-rs3/"
            >
              Comprar contas Runescape 3
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            <a
              className="hover:text-white text-yellow-500 transition-all"
              href="https://cashdofray.store/store/categoria-produto/buy-account-rs3/"
            >
              Venda sua conta Runescape 3
            </a>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
