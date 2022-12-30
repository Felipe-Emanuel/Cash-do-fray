import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export function Counter() {
  const [counter, setCounter] = useState(true);

  return (
    //@ts-ignore
    <ScrollTrigger
      onEnter={() => setCounter(true)}
      onExit={() => setCounter(false)}
    >
      <h2 className=" text-center font-semibold text-lg leading-10 mt-14 mb-7">
        E mais...
      </h2>
      <div className="grid grid-rows-2 grid-flow-col lg:grid-rows-1 gap-4 text-center">
        {counter && (
          <>
            <div
              className={`${
                counter && "animate-appearLeft"
              } text-xl font-thin leading-[72px]`}
            >
              <CountUp start={0} end={219} duration={2} delay={0} />
              <p className="text-sm font-semibold h-12 leading-6">Missões</p>
            </div>
            <div
              className={`${
                counter && "animate-appearLeft"
              } text-xl font-thin leading-[72px]`}
            >
              <CountUp start={0} end={28} duration={2} delay={0} />
              <p className="text-sm font-semibold h-12 leading-6">
                Habilidades
              </p>
            </div>
            <div
              className={`${
                counter && "animate-appearRight"
              } text-xl font-thin leading-[72px]`}
            >
              <CountUp start={0} end={45} duration={2} delay={0} />
              <p className="text-sm font-semibold h-12 leading-6">Mini-jogos</p>
            </div>
            <div
              className={`${
                counter && "animate-appearRight"
              } text-xl font-thin leading-[72px]`}
            >
              <CountUp start={0} end={571} duration={2} delay={0} />
              <p className="text-sm font-semibold h-12 leading-6">
                Espaços no banco
              </p>
            </div>
          </>
        )}
      </div>
    </ScrollTrigger>
  );
}
