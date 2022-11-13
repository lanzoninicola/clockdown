import { Outlet } from "@remix-run/react";
import React, { useEffect } from "react";

export default function Welcome() {
  return (
    <div className="relative min-h-screen bg-hero-bg ">
      <div className="absolute top-8 flex w-screen justify-center px-8 opacity-10 md:top-1/2 md:-translate-y-1/2">
        <div className="grid w-max grid-cols-5 justify-items-center ">
          <TextItem>00</TextItem>
          <TextItem>:</TextItem>
          <TextItem>00</TextItem>
          <TextItem>:</TextItem>
          <Seconds />
        </div>
      </div>
      <div className="grid h-screen place-items-center pb-8 ">
        <div className="h-auto p-4 md:w-max md:rounded-xl md:p-16 md:shadow-xl md:backdrop-blur-sm">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function TextItem({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-accent text-5xl font-bold md:text-9xl">
      {children}
    </span>
  );
}

function Seconds() {
  const [seconds, setSeconds] = React.useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return <TextItem>{seconds}</TextItem>;
}
