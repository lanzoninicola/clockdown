import type { User } from "@prisma/client";
import { Authenticator, AuthorizationError } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import PrismaUsersRepository from "~/server/repositories/prisma-users.repository.server";
import { sessionStorage } from "./session-storage.server";
import bcrypt from "bcryptjs";

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

    let user = await repository.findUserByEmail(email);

    console.log("user: ", user);

    if (user === null) {
      throw new AuthorizationError(
        "Não conseguimos achá-lo. Você tem certeza de ter uma conta? Como alternativa, por favor, cadastre-se."
      );
    }

    if (user) {
      const isPasswordCorrect = await bcrypt.compareSync(
        password,
        user.password
      );

      console.log("isPasswordCorrect: ", isPasswordCorrect);

      if (!isPasswordCorrect) {
        return null;
      }

      return user;
    }

    return null;
  }),
  // each strategy has a name and can be changed to use another one
  // same strategy multiple times, especially useful for the OAuth2 strategy.
  "email-pass"
);
