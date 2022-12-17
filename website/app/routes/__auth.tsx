import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { Outlet, useLoaderData, useNavigate, Link } from "@remix-run/react";
import { useEffect } from "react";
import SimpleTimer from "~/client/common/simple-timer";
import ArrowRight from "~/client/website/common/arrow-right/arrow-right";
import isUserAuthenticated from "~/server/auth/remix-auth/utils/is-user-authenticated.server";

export interface LoginSignUpOutletContext {
  authContext: "checkout" | "app";
}

export const loader = async ({ request }: LoaderArgs) => {
  const query = new URL(request.url).searchParams;
  const authContext = query.get("context");

  let userAuthData = await isUserAuthenticated(request);

  if (authContext && userAuthData) {
    return json({ context: authContext, isAuthed: true });
  }

  if (authContext) {
    return json({ context: authContext, isAuthed: false });
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

  // if the authentication workflow is fired for the checkout process
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

  // if the authentication workflow is fired for using the app
  return (
    <section className="relative min-h-screen bg-hero-bg ">
      <div className="grid h-screen place-items-center pb-8 ">
        <div className="h-auto p-4 md:w-max md:rounded-xl md:p-16 md:shadow-xl md:backdrop-blur-sm">
          <Outlet context={{ authContext: loaderData?.context }} />
        </div>
      </div>
    </section>
  );
}
