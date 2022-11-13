import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PaymentButton from "../payment-button/payment-button";
import type { OrderResponseBody } from "@paypal/paypal-js/types/apis/orders";

// https://www.sandbox.paypal.com/signin

interface PayPalButtonProps {
  amount: string;
  currency: string | "BRL";
  /* async fn */
  onApprove?: (orderResponseBody: OrderResponseBody) => void;
  /* async fn */
  onError?: (err: Record<string, unknown>) => void;
  /* async fn */
  onCancel?: (data: Record<string, unknown>) => void;
}

export default function PayPalButton({
  amount,
  currency,
  onApprove,
  onError,
  onCancel,
}: PayPalButtonProps) {
  const initialOptions = {
    "client-id":
      "AZZ2rXm-Dum6G4oymThXeKokOu-V8hmnTFRPG4O874s7SEDeFcztBYkBPRER_MU1JqNHjCQSjbvyX_44",
    currency,
    components: "buttons",
  };

  const stylesOptions = {
    style: { layout: "vertical" },
    showSpinner: false,
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PaymentButton
        {...stylesOptions}
        currency={currency}
        amount={amount}
        onApprove={onApprove}
        onError={onError}
        onCancel={onCancel}
      />
    </PayPalScriptProvider>
  );
}
