import { json, redirect } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import isUserAuthenticated from "~/modules/remix-auth/server/utils/is-user-authenticated.server";
import { PayPalButton } from "~/modules/remix-paypal/client";
import { useLoaderData, useNavigate } from "@remix-run/react";
import type { User } from "@prisma/client";
import type {
  CheckoutFrontendConfig,
  PaymentCancelledRequestData,
} from "~/server/checkout/types";

interface LoaderData {
  user: User;
  checkoutConfig: CheckoutFrontendConfig;
}

export const loader: LoaderFunction = async ({ request }) => {
  let userAuthData = await isUserAuthenticated(request);

  if (userAuthData === null) {
    return redirect("/checkout/login");
  }

  return json({
    user: userAuthData,
    checkoutConfig: {
      currency: "BRL",
      amount: "120",
      clientId:
        "AZZ2rXm-Dum6G4oymThXeKokOu-V8hmnTFRPG4O874s7SEDeFcztBYkBPRER_MU1JqNHjCQSjbvyX_44",
    },
  });
};

// TODO: make a class to handle fetch operations, maybe using in the frontend "fetcher" and send request into ActionFunction

export default function Payment() {
  const loaderData: LoaderData = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  async function onOrderApproved(orderResponseBody) {
    console.log("onOrderApproved", orderResponseBody);

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        payload: {
          paymentStatus: "approved",
          order: orderResponseBody,
          payer: loaderData.user.email,
        },
      }),
    });

    if (res.status === 200) {
      navigate("/checkout/thank-you");
    }

    if (res.status === 401) {
      navigate("/checkout/login");
    }
  }

  async function onPaymenteError(err) {
    console.log("onPaymenteError", err);

    await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        payload: { paymentStatus: "error", err, payer: loaderData.user.email },
      }),
    });
  }

  async function onPaymenteCancelled(data) {
    const requestPayload: PaymentCancelledRequestData = {
      payload: {
        paymentStatus: "cancelled",
        data,
        payer: loaderData.user.email,
      },
    };

    await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestPayload),
    });
  }

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
          amount={loaderData?.checkoutConfig.amount || "0"}
          currency={loaderData.checkoutConfig.currency}
          clientId={loaderData.checkoutConfig.clientId}
          onApprove={onOrderApproved}
          onCancel={onPaymenteCancelled}
          onError={onPaymenteError}
        />
        {/* <button
          onClick={async () => {
            const res = await fetch("/api/checkout", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                payload: {
                  paymentStatus: "approved",

                  user: loaderData.user.email,
                },
              }),
            });

            // const res = await fetch("/api/checkout", {
            //   method: "POST",
            //   headers: {
            //     "Content-Type": "application/json",
            //   },
            //   body: JSON.stringify({
            //     payload: {
            //       paymentStatus: "approved",
            //     },
            //   }),
            // });

            console.log("res", res);
          }}
        >
          press me
        </button> */}
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
          <span className="font-body">
            <strong> R$ 120</strong>
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * {
    "id": "3AU83308HK926041Y",
    "intent": "CAPTURE",
    "status": "COMPLETED",
    "purchase_units": [
        {
            "reference_id": "default",
            "amount": {
                "currency_code": "BRL",
                "value": "120.00"
            },
            "payee": {
                "email_address": "sb-gkh5222041559@business.example.com",
                "merchant_id": "KQMWWVCKWXRDS"
            },
            "soft_descriptor": "PAYPAL *TEST STORE",
            "shipping": {
                "name": {
                    "full_name": "John Doe"
                },
                "address": {
                    "address_line_1": "Sao Jorge Way",
                    "admin_area_2": "Sacramento",
                    "admin_area_1": "CA",
                    "postal_code": "95831",
                    "country_code": "US"
                }
            },
            "payments": {
                "captures": [
                    {
                        "id": "57V54121EG4066240",
                        "status": "COMPLETED",
                        "amount": {
                            "currency_code": "BRL",
                            "value": "120.00"
                        },
                        "final_capture": true,
                        "seller_protection": {
                            "status": "ELIGIBLE",
                            "dispute_categories": [
                                "ITEM_NOT_RECEIVED",
                                "UNAUTHORIZED_TRANSACTION"
                            ]
                        },
                        "create_time": "2022-11-23T00:42:27Z",
                        "update_time": "2022-11-23T00:42:27Z"
                    }
                ]
            }
        }
    ],
    "payer": {
        "name": {
            "given_name": "John",
            "surname": "Doe"
        },
        "email_address": "clockdown@paypal.com",
        "payer_id": "E7C2GSSL3BEKS",
        "address": {
            "country_code": "US"
        }
    },
    "create_time": "2022-11-23T00:42:14Z",
    "update_time": "2022-11-23T00:42:27Z",
    "links": [
        {
            "href": "https://api.sandbox.paypal.com/v2/checkout/orders/3AU83308HK926041Y",
            "rel": "self",
            "method": "GET"
        }
    ]
}
 */
