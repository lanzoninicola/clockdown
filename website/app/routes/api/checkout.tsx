import { json } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import getUserAuthenticated from "~/server/auth/remix-auth/utils/get-user-authenticated.server";

export const action: ActionFunction = async ({ request }) => {
  if (request.method !== "POST") {
    return json({ message: "Method not allowed" }, 405);
  }

  let userAuthData = await getUserAuthenticated(request);

  if (userAuthData === null) {
    return json(
      {
        status: 401,
        message: "Usuário não autenticado",
      },
      { status: 401 }
    );
  }

  const body = await request.json();

  console.log("body", body);

  return json(
    {
      status: 200,
      message: "Sucesso",
    },
    { status: 200 }
  );
};
