import NavList from "~/client/website/common/nav-list/nav-list";

function NavListLegal() {
  const items = [
    { to: "/terms-and-policies#terms-of-service", text: "Termos do serviço" },
    {
      to: "/terms-and-policies#privacy-policy",
      text: "Politica de privacidade",
    },
    { to: "/terms-and-policies#cookie-policy", text: "Politica do cookie" },
  ];

  return <NavList items={items} direction="col" spacing={4} />;
}

export default NavListLegal;
