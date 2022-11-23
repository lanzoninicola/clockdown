import { json, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  return json(
    {
      hello: "world",
    },
    { status: 200 }
  );
};
