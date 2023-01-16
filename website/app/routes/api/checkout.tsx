import { json } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import isUserAuthenticated from "~/modules/remix-auth/server/utils/is-user-authenticated.server";
import { PaymentRequestData } from "~/server/checkout/types";
import { Order } from "@prisma/client";
import PrismaUsersRepository from "~/server/repositories/prisma-users.repository.server";
import PrismaOrdersRepository from "~/server/repositories/prisma-orders.repository.server";
import tryCatch from "~/server/utils/try-catch.server";

/**
 * After the Paypal approves the payment,
 * I send the order data to the backend trough this route
 */
export const action: ActionFunction = async ({ request }) => {
  if (request.method !== "POST") {
    return json({ message: "Method not allowed" }, 405);
  }

  // let userAuthData = await isUserAuthenticated(request);

  // if (userAuthData === null) {
  //   return json(
  //     {
  //       status: 401,
  //       message: "Usuário não autenticado",
  //     },
  //     { status: 401 }
  //   );
  // }

  const body: PaymentRequestData = await request.json();

  if (body?.payload?.paymentStatus === "approved") {
    return tryCatch(async () => {
      const orderRequestData = body.payload.order;
      const payer = body.payload.payer;

      const usersRepository = new PrismaUsersRepository();
      const user = await usersRepository.findUserByEmail(payer);

      if (user === null) {
        return json(
          {
            status: 404,
            message: "Usuário não encontrado",
          },
          { status: 404 }
        );
      }

      console.log(orderRequestData.purchase_units[0].amount.value);

      const newOrder = {
        productId: 2,
        quantity: 1,
        price: Number(orderRequestData.purchase_units[0].amount.value),
        currency: orderRequestData.purchase_units[0].amount.currency_code,
        total: Number(orderRequestData.purchase_units[0].amount.value),
        paymentMethod: "paypal",
        userId: user.id,
      };

      const ordersRepository = new PrismaOrdersRepository();
      const order = await ordersRepository.create(newOrder);

      return json(
        {
          status: 200,
          message: "Pedido criado com sucesso",
          payload: { order },
        },
        { status: 200 }
      );
    });
  }

  // return json(
  //   {
  //     status: 400,
  //     message: "Pedido não criado",
  //   },
  //   { status: 400 }
  // );
};
