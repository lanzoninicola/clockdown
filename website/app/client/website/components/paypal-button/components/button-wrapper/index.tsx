import { useEffect } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

interface ButtonWrapperProps {
  amount: string;
  currency: string;
  showSpinner: boolean;
  style?: any;
}

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({
  amount,
  currency,
  showSpinner,
  style,
}: ButtonWrapperProps) => {
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
        fundingSource={undefined}
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
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          if (actions.order) {
            return actions.order.capture().then(function () {
              // Your code here after capture the order
            });
          }

          return Promise.reject();
        }}
      />
    </>
  );
};

export default ButtonWrapper;
