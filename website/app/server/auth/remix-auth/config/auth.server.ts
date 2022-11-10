import type { User } from "@prisma/client";
import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import PrismaUsersRepository from "~/server/repositories/prisma-users.repository.server";
import { sessionStorage } from "./session.server";

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export let authenticator = new Authenticator<User | null>(sessionStorage, {
  sessionKey: "user",
});

// Tell the Authenticator to use the form strategy
authenticator.use(
  new FormStrategy(async ({ form }: { form: FormData }) => {
    let email = form.get("email") as string;
    let password = form.get("password") as string;

    if (!email || !password) {
      return null;
    }

    const repository = new PrismaUsersRepository();
    let user = await repository.getUserByEmailAndPassword(email, password);

    if (user) {
      return user;
    }

    return null;
  }),
  // each strategy has a name and can be changed to use another one
  // same strategy multiple times, especially useful for the OAuth2 strategy.
  "email-pass"
);
