import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PaymentButton from "../payment-button/payment-button";
import type { OrderResponseBody } from "@paypal/paypal-js/types/apis/orders";

// https://www.sandbox.paypal.com/signin

interface PayPalButtonProps {
  amount: string;
  currency: string | "BRL";
  clientId: string;
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
  clientId,
  onApprove,
  onError,
  onCancel,
}: PayPalButtonProps) {
  const initialOptions = {
    "client-id": clientId,
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
