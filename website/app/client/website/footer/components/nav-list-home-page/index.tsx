import { useLoaderData } from "@remix-run/react";
import NavList from "~/client/website/common/nav-list/nav-list";
import { HomePageLoaderData } from "~/routes";

function NavListHomePage() {
  const loaderData = useLoaderData<HomePageLoaderData>();

  const content = loaderData.pageContent.footer.menus.home;

  const items = [
    { to: "/", text: content.links.home },
    { to: "#why", text: content.links.why },
    { to: "#product-details", text: content.links.productDetails },
    { to: "#how-it-works", text: content.links.howItWorks },
    { to: "#pricing-table", text: content.links.pricing },
  ];

  return <NavList items={items} direction="col" spacing={4} />;
}

export default NavListHomePage;
