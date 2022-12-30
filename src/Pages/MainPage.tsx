import { Footer } from "../components/Footer/Footer";
import { Wpp } from "../components/Wpp/Wpp";
import { About } from "../templates/About";
import { Contact } from "../templates/Contact";
import { Feedback } from "../templates/Feedback";
import { Home } from "../templates/Home";
import { Member } from "../templates/Member";

export function MainPage({overlay}: any) {

  return (
    <div className={overlay === true ? 'blur-sm pointer-events-none' : ''}>
      <Home />
      <About />
      <Feedback />
      <Member />
      <Contact />
      <Footer />
      <Wpp />
    </div>
  );
}
