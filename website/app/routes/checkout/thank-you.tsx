import { Link, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import SimpleTimer from "~/client/common/simple-timer";
import ArrowRight from "~/client/website/common/arrow-right/arrow-right";

export default function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    let time: NodeJS.Timeout;

    time = setTimeout(() => {
      navigate("/app");
    }, 5000);

    return () => clearTimeout(time);
  }, [navigate]);

  return (
    <div className="flex max-w-[320px] flex-col items-center justify-center">
      <div className="mb-8 text-center">
        <h1 className="mb-4 font-accent text-2xl font-bold uppercase tracking-widest">
          Obrigado
        </h1>
        <span className="font-body">
          Estamos felizes que você tenha escolhido a nossa plataforma.
        </span>
      </div>
      <div className="mb-8 flex flex-col items-center gap-1">
        <span className="mb-4 font-body">
          Você sera automaticamente direçionado para o editor do contador
          regressivo.
        </span>
        <SimpleTimer
          seconds={5}
          itemClazzName={`font-accent text-xl font-bold md:text-4xl`}
          counterMode={true}
        />
      </div>
      <div className="mb-8 h-[.5px] w-full bg-gray-400 "></div>
      <Link to="/app">
        <button
          className={`flex max-w-max flex-row gap-4 rounded-xl  bg-accent-500 px-8 py-2 shadow-lg transition-colors hover:bg-accent-base`}
        >
          <span
            className={`text-md font-body font-bold uppercase tracking-wider text-black md:text-xl`}
          >
            Vai para o app
          </span>
          <ArrowRight color={`text-black`} />
        </button>
      </Link>
    </div>
  );
}
