import NavList from "~/client/website/common/nav-list/nav-list";

function NavListHomePage() {
  const items = [
    { to: "#why", text: "Porque" },
    { to: "#product-details", text: "Detalhes produto" },
    { to: "#how-it-works", text: "Como functiona" },
    { to: "#pricing-table", text: "Planos" },
  ];

  return <NavList items={items} direction="col" spacing={4} />;
}

export default NavListHomePage;
