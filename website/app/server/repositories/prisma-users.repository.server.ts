import type { User } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

export default class PrismaUsersRepository {
  private _prismaClient: PrismaClient;

  constructor() {
    this._prismaClient = new PrismaClient();
  }

  public async getUserByEmail(email: string): Promise<User | null> {
    return await this._prismaClient.user.findUnique({
      where: {
        email,
      },
    });
  }

  public async getUserByEmailAndPassword(
    email: string,
    password: string
  ): Promise<User | null> {
    return await this._prismaClient.user.findFirst({
      where: {
        email,
        password,
      },
    });
  }

  public async create(user: Omit<User, "id">): Promise<User> {
    return await this._prismaClient.user.create({
      data: user,
    });
  }
}
