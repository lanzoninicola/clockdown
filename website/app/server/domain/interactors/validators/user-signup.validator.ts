import ValidationError from "~/server/common/errors/validation-error.server";
import type { UserSignup } from "~/server/common/types/dtos";

import type { BaseRepository, Validator } from "~/server/common/types/global";
import PrismaUsersRepository from "~/server/repositories/prisma-users.repository.server";

// TODO: to implement
export default class UserSignupValidator implements Validator<UserSignup> {
  constructor(private _repository: PrismaUsersRepository) {}

  public async validate(user: UserSignup): Promise<ValidationError | void> {
    const { email, password } = user;

    const userFound = await this._repository.getUserByEmail(email);

    if (userFound) {
      throw new ValidationError("User already exists");
    }

    if (!email) {
      return new ValidationError("Email is required");
    }

    if (!password) {
      return new ValidationError("Password is required");
    }

    if (password.length < 8) {
      return new ValidationError("Password must be at least 8 characters long");
    }

    if (!/[A-Z]/.test(password)) {
      return new ValidationError(
        "Password must contain at least one uppercase letter"
      );
    }

    if (!/[a-z]/.test(password)) {
      return new ValidationError(
        "Password must contain at least one lowercase letter"
      );
    }

    if (!/[0-9]/.test(password)) {
      return new ValidationError("Password must contain at least one digit");
    }

    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      return new ValidationError(
        "Password must contain at least one special character"
      );
    }

    return;
  }
}
