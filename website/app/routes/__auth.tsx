import { Outlet } from "@remix-run/react";

export default function Welcome() {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="grid place-items-center bg-blue-400">
        <img
          src="/images/user-registration/stepping-up.png"
          alt="user registration form"
          className="w-[240px] rounded-xl md:w-1/2"
        />
      </div>
      <div className="grid place-items-center px-8">
        <Outlet />
      </div>
    </div>
  );
}
