import { useState } from "react";
import Avatar from "../avatar/avatar";

import type { User } from "@prisma/client";

export interface AvatarDropdownProps {
  user: Partial<User> | null | undefined;
}

export default function AvatarDropdown({ user }: AvatarDropdownProps) {
  const [show, setShow] = useState(false);

  return (
    <div
      data-element="avatar-dropdown"
      className="relative"
      onMouseEnter={() => setShow(!show)}
      onMouseLeave={() => setShow(!show)}
    >
      <Avatar user={user} onClick={() => setShow(!show)} />

      {show && (
        <div className="absolute  z-10 min-w-[150px] rounded bg-white p-2 shadow">
          <div className="divide-y divide-gray-200 ">
            <span className="mb-4 font-body text-xs font-bold">
              {`Olá ${user?.fullname ? user.fullname : "Anónimo"} `}{" "}
            </span>
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefault"
            >
              <li>
                <a
                  href="/signout"
                  className="block py-2 px-2 hover:rounded-md hover:bg-blue-200"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
