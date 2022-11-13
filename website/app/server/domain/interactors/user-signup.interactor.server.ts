import type { UserSignup } from "~/server/common/types/dtos";
import type { BaseRepository, Validator } from "~/server/common/types/global";

export default class UserSignupInteractor {
  constructor(
    private _usersRepository: BaseRepository,
    private _userSignupValidator: Validator<UserSignup>
  ) {}

  public async execute(user: UserSignup): Promise<any> {
    user.email = this.sanitizeEmail(user.email);
    user.password = this.sanitizePassword(user.password);

    await this._userSignupValidator.validate(user);
    return await this._usersRepository.create(user);
  }

  public sanitizeEmail(email: string): string {
    return email.toLowerCase().trim();
  }

  public sanitizePassword(password: string): string {
    return password.trim();
  }
}
