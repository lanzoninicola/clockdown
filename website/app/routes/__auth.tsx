import { Outlet } from "@remix-run/react";
import SimpleTimer from "~/client/common/simple-timer";

export default function Welcome() {
  return (
    <div className="relative min-h-screen bg-hero-bg ">
      <div className="absolute top-8 flex w-screen justify-center px-8 opacity-10 md:top-1/2 md:-translate-y-1/2">
        <SimpleTimer
          seconds={59}
          itemClazzName={`font-accent text-5xl font-bold md:text-9xl`}
        />
      </div>
      <div className="grid h-screen place-items-center pb-8 ">
        <div className="h-auto p-4 md:w-max md:rounded-xl md:p-16 md:shadow-xl md:backdrop-blur-sm">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
