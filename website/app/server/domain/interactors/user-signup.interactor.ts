import type { UserSignup } from "~/server/common/types/dtos";
import type { BaseRepository, Validator } from "~/server/common/types/global";

export default class UserSignupInteractor {
  constructor(
    private _usersRepository: BaseRepository,
    private _userSignupValidator: Validator<UserSignup>
  ) {}

  public async execute(user: UserSignup): Promise<any> {
    await this._userSignupValidator.validate(user);
    return await this._usersRepository.create(user);
  }
}
