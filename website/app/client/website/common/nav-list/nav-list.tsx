import { NavLink } from "@remix-run/react";

interface NavItem {
  to: string;
  text: string;
}

interface NavListProps {
  items: NavItem[];
  direction: "col" | "row";
  spacing: number;
}

function NavList({ items, direction = "col", spacing = 1 }: NavListProps) {
  return (
    <nav>
      <ul className={`flex flex-${direction} gap-${spacing}`}>
        {items.map((item, idx) => (
          <li key={idx}>
            <NavLink
              to={item.to}
              className="text-md font-body active:text-blue-700"
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavList;
