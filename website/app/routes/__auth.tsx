import { json, LoaderArgs, redirect } from "@remix-run/node";
import { Outlet, useLoaderData, useNavigate, Link } from "@remix-run/react";
import { useEffect } from "react";
import SimpleTimer from "~/client/common/simple-timer";
import ArrowRight from "~/client/website/common/arrow-right/arrow-right";
import getUserAuthenticated from "~/server/auth/remix-auth/utils/get-user-authenticated.server";

export interface LoginSignUpOutletContext {
  checkout: boolean;
}

export const loader = async ({ request }: LoaderArgs) => {
  const query = new URL(request.url).searchParams;
  const productPlan = query.get("checkout");

  let userAuthData = await getUserAuthenticated(request);

  if (productPlan && userAuthData) {
    return json({ context: "checkout", isAuthed: true });
  }

  if (productPlan) {
    return json({ context: "checkout", isAuthed: false });
  }

  return json({ context: "auth", isAuthed: !!userAuthData });
};

export default function Welcome() {
  const loaderData = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  useEffect(() => {
    let time: NodeJS.Timeout;

    if (loaderData?.context === "checkout" && loaderData?.isAuthed) {
      time = setTimeout(() => {
        navigate("/checkout/payment");
      }, 5000);
    }

    return () => clearTimeout(time);
  }, [loaderData, navigate]);

  if (loaderData?.context === "checkout" && loaderData?.isAuthed) {
    return (
      <div className="max-w-screen grid min-h-screen place-items-center bg-hero-bg p-4">
        <div className="grid grid-rows-[auto_auto_auto] justify-items-center ">
          <div className="mb-8 grid grid-rows-2 items-center  justify-items-center md:max-w-[750px] md:grid-cols-2 md:grid-rows-1">
            <span className=" text-center font-body text-2xl md:text-left md:text-3xl">
              <span className="font-bold">Você é já loggado</span>, e está
              redirecionando para finalizar a compra em:
            </span>
            <SimpleTimer
              seconds={5}
              itemClazzName={`font-accent text-3xl font-bold md:text-7xl`}
              counterMode={true}
            />
          </div>
          <div className="mb-8 h-[.5px] w-full bg-gray-400 "></div>
          <Link to="/checkout/payment">
            <button
              className={`flex max-w-max flex-row gap-4 rounded-xl  bg-accent-500 px-8 py-2 shadow-lg transition-colors hover:bg-accent-base`}
            >
              <span
                className={`text-md font-body font-bold uppercase tracking-wider text-black md:text-xl`}
              >
                Finalizamos agora
              </span>
              <ArrowRight color={`text-black`} />
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen bg-hero-bg ">
      <div className="absolute top-8 flex w-screen justify-center px-8 opacity-10 md:top-1/2 md:-translate-y-1/2">
        <SimpleTimer
          seconds={59}
          itemClazzName={`font-accent text-5xl font-bold md:text-9xl`}
        />
      </div>
      <div className="grid h-screen place-items-center pb-8 ">
        <div className="h-auto p-4 md:w-max md:rounded-xl md:p-16 md:shadow-xl md:backdrop-blur-sm">
          <Outlet
            context={{ checkout: loaderData?.context === "checkout" || false }}
          />
        </div>
      </div>
    </section>
  );
}
