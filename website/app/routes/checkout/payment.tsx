import { json, redirect } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import getUserAuthenticated from "~/server/auth/remix-auth/utils/get-user-authenticated.server";
import { PayPalButton } from "~/client/common/paypal";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }) => {
  // const query = new URL(request.url).searchParams;

  // const plan = query.get("plan");

  let userAuthData = await getUserAuthenticated(request);

  console.log("userAuthData", userAuthData);

  if (userAuthData === null) {
    return redirect("/checkout/login");
  }

  return json({
    user: userAuthData,
    checkoutConfig: { currency: "BRL", amount: 120 },
  });
};

export default function Payment() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <div className="flex  flex-col gap-16">
      <div className="flex flex-col gap-4">
        <h2 className="text-md font-body font-bold">Carrinho de compra</h2>
        <Cart />
      </div>
      <div className="flex flex-col gap-8">
        <h3 className="font font-body text-sm">
          Clique no botão abaixo para proceder ao pagamento
        </h3>
        <PayPalButton
          amount={loaderData?.checkoutConfig.amount}
          currency={loaderData.checkoutConfig.currency}
        />
      </div>
    </div>
  );
}

function Cart() {
  return (
    <div className="border-1 rounded-lg bg-white py-4 px-4 shadow-md">
      <div className="grid grid-cols-[1fr_auto] md:gap-48">
        <div className="flex flex-col gap-2">
          <span className="font-body text-xs font-bold">Produto</span>
          <span className="text-md font-body">
            Clockdown: plano <strong>Pro</strong> (12 mêses).
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-body text-xs font-bold">Valor</span>
          <span className="font-body font-body">
            <strong> R$ 120</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
