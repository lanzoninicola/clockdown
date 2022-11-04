import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import ButtonWrapper from "./components/button-wrapper";

const initialOptions = {
  "client-id":
    "ASDewvxGWwnswSCgu2hS71lQiL_IdxOOKcHy4BGKI-hCaAYmTK9FbPFgjaJBgrbmhiA6wC1Fm81I79Kj",
  currency: "BRL",
  components: "buttons",
  "data-client-token": "abc123xyz",
};

const UIOptions = {
  style: { layout: "vertical" },
  amount: "2",
  currency: initialOptions.currency,
  showSpinner: false,
};

export default function PayPalButton() {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <ButtonWrapper {...UIOptions} />
    </PayPalScriptProvider>
  );
}
