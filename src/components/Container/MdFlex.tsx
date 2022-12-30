import { AboutDialog } from "../AboutDialog/AboutDialog";
import { ModalVideo } from "../ModalVideo/ModalVideo";

export function MdFlex() {
  return (
    <div className="block w-full md:flex mb-16">
      <div className="md:w-[50%]">
        <ModalVideo />
      </div>
      <div className="md:w-[50%]">
        <AboutDialog />
      </div>
    </div>
  );
}
