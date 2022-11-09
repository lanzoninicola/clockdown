import type { UserSignup } from "~/server/common/types/dtos";
import type { ValidationError } from "~/server/common/types/errors";
import type { Validator } from "~/server/common/types/global";

// TODO: to implement
export default class UserSignupValidator implements Validator<UserSignup> {
  public async validate(user: UserSignup): Promise<ValidationError | void> {}
}
