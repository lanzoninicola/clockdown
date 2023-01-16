import { useLoaderData } from "@remix-run/react";
import NavList from "~/client/website/common/nav-list/nav-list";
import { type HomePageLoaderData } from "~/routes";

function NavListLegal() {
  const loaderData = useLoaderData<HomePageLoaderData>();

  const content = loaderData.pageContent.footer.menus.legal;

  const items = [
    { to: "/terms-and-policies#terms-of-service", text: content.links.terms },
    {
      to: "/terms-and-policies#privacy-policy",
      text: content.links.privacy,
    },
  ];

  return <NavList items={items} direction="col" spacing={4} />;
}

export default NavListLegal;
