import ValidationError from "~/server/common/errors/validation-error.server";
import type { UserSignup } from "~/server/common/types/dtos";

import type { BaseRepository, Validator } from "~/server/common/types/global";
import PrismaUsersRepository from "~/server/repositories/prisma-users.repository.server";

// TODO: to implement
export default class UserSignupValidator implements Validator<UserSignup> {
  constructor(private _repository: PrismaUsersRepository) {}

  public async validate(user: UserSignup): Promise<ValidationError | void> {
    const { email, password } = user;

    const userFound = await this._repository.findUserByEmail(email);

    if (userFound) {
      throw new ValidationError("Usuário já cadastrado");
    }

    if (!email) {
      return new ValidationError("Email não informado");
    }

    if (!password) {
      return new ValidationError("Senha não informada");
    }

    if (password.length < 8) {
      return new ValidationError("Senha deve ter no mínimo 8 caracteres");
    }

    if (!/[A-Z]/.test(password)) {
      return new ValidationError(
        "Senha deve conter pelo menos uma letra maiúscula"
      );
    }

    if (!/[a-z]/.test(password)) {
      return new ValidationError(
        "Senha deve conter pelo menos uma letra minúscula"
      );
    }

    if (!/[0-9]/.test(password)) {
      return new ValidationError("Senha deve conter pelo menos um número");
    }

    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      return new ValidationError(
        "Senha deve conter pelo menos um caractere especial"
      );
    }

    return;
  }
}
