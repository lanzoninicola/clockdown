import { useLoaderData } from "@remix-run/react";
import { type HomePageLoaderData } from "~/routes";
import HorizontalLine from "../common/horizontal-line/horizontal-line";
import NavListHomePage from "./components/nav-list-home-page";
import NavListLegal from "./components/nav-list-legal";

export default function Footer() {
  const loaderData = useLoaderData<HomePageLoaderData>();

  const sectionContent = loaderData.pageContent.footer;

  return (
    <footer className="flex flex-col justify-center bg-blue-md px-4 pt-32 pb-16 ">
      <div className="mx-auto max-w-[1280px] md:min-w-[768px] lg:min-w-[1024px] xl:min-w-[1280px]">
        <div className="grid gap-16  md:grid-cols-2 ">
          <div className="flex flex-col gap-4">
            <img
              src="/images/logo/full-logo.png"
              alt="clockdown logo"
              className="w-max"
            />
            <div className="flex flex-col gap-4">
              <q className="font-body text-sm italic">
                {sectionContent.quote.text}
              </q>
              <span className="max-w-prose font-body text-xs italic">
                {sectionContent.quote.explanation}
              </span>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-2 font-titles text-xl font-bold">Clockdown</h4>
              <NavListHomePage />
            </div>
            <div className="">
              <h4 className="mb-2 font-titles text-xl font-bold">
                {sectionContent.menus.legal.title}
              </h4>
              <NavListLegal />
            </div>
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-1">
          <div>
            <HorizontalLine />
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-1">
              <img src="/images/copyright.svg" alt="" />
              <p className="md:text-md font-body text-sm">
                Clockdown by <span className="font-bold">Lanzoni Nicola</span>
              </p>
            </div>
            <span className="md:text-md font-body text-sm font-bold">
              Be Inspired
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
