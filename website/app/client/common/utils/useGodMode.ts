import { useLoaderData } from "@remix-run/react";

export default function useGodMode() {
  const loaderData = useLoaderData();

  if (loaderData?.zeus === true) {
    return true;
  }

  return false;
}
