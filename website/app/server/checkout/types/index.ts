import type { User } from "@prisma/client";

export type supportedCurrency = "BRL";

export interface CheckoutFrontendConfig {
  currency: supportedCurrency;
  amount: number;
  clientId: string;
}

export type PaymentRequestData =
  | PaymentApprovedRequestData
  | PaymentErrorRequestData
  | PaymentCancelledRequestData;

/** Payload will send to the REST-API after Paypal proccessed the payment. Data are used to store the order */
export interface PaymentApprovedRequestData {
  payload: {
    paymentStatus: "approved";
    order: OrderResponseBody;
    payer: User["email"];
  };
}

/** Payload will send to the REST-API after Paypal proccessed the payment. Data are used to track payment errors */
export interface PaymentErrorRequestData {
  payload: {
    paymentStatus: "error";
    err: any;
    payer: User["email"];
  };
}

/** Payload will send to the REST-API after Paypal proccessed the payment */
export interface PaymentCancelledRequestData {
  payload: {
    paymentStatus: "cancelled";
    data: any;
    payer: User["email"];
  };
}

export interface OrderResponseBody {
  id: string;
  intent: string;
  status: string;
  purchase_units: [
    {
      reference_id: string;
      amount: {
        currency_code: supportedCurrency;
        value: number;
      };
      payee: {
        email_address: string;
        merchant_id: string;
      };
      soft_descriptor: string;
      shipping: {
        name: {
          full_name: string;
        };
        address: {
          address_line_1: string;
          admin_area_2: string;
          admin_area_1: string;
          postal_code: string;
          country_code: string;
        };
      };

      payments: {
        captures: [
          {
            id: string;
            status: string;
            amount: {
              currency_code: "BRL";
              value: "120.00";
            };
            final_capture: true;
            seller_protection: {
              status: string;
              dispute_categories: string[];
            };
            create_time: string;
            update_time: string;
          }
        ];
      };
    }
  ];
  payer: Payer;
  create_time: string;
  update_time: string;
  links?: [];
}

/** Who made the payment */
export interface Payer {
  name: {
    given_name: string;
    surname: string;
  };
  email_address: User["email"];
  payer_id: string;
  address: {
    country_code: string;
  };
}
