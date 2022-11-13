import { useEffect } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import type { OrderResponseBody } from "@paypal/paypal-js/types/apis/orders";

interface PaymentButtonProps {
  amount: string;
  currency: string;
  showSpinner: boolean;
  style?: any;
  onApprove?: (orderResponseBody: OrderResponseBody) => void;
  onError?: (err: Record<string, unknown>) => void;
  onInit?: (data: any, actions: any) => void;
  onCancel?: (data: Record<string, unknown>) => void;
}

// Custom component to wrap the PayPalButtons and handle currency changes
const PaymentButton = ({
  amount,
  currency,
  showSpinner,
  style,
  onApprove,
  onError,
  onInit,
  onCancel,
}: PaymentButtonProps) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={"paypal"}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              return orderId;
            });
        }}
        onApprove={async (data, actions) => {
          console.log("Order has been approved...", data);

          if (actions.order) {
            const order: OrderResponseBody = await actions.order.capture();

            if (onApprove) {
              await onApprove(order);
            }
          }

          return Promise.reject();
        }}
        onError={async (err: Record<string, unknown>) => {
          if (onError) {
            await onError(err);
          }
        }}
        onCancel={async (data: Record<string, unknown>) => {
          if (onCancel) {
            await onCancel(data);
          }
        }}
      />
    </>
  );
};

export default PaymentButton;

/**
 * {
    "id": "2JN58189SW4736900",
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
                        "id": "1XX07083B4960592M",
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
                        "create_time": "2022-11-13T19:44:00Z",
                        "update_time": "2022-11-13T19:44:00Z"
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
    "create_time": "2022-11-13T19:43:46Z",
    "update_time": "2022-11-13T19:44:00Z",
    "links": [
        {
            "href": "https://api.sandbox.paypal.com/v2/checkout/orders/2JN58189SW4736900",
            "rel": "self",
            "method": "GET"
        }
    ]
}
 */
