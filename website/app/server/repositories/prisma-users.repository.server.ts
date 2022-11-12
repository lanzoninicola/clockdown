import type { User } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import type { BaseRepository } from "../common/types/global";

export default class PrismaUsersRepository implements BaseRepository {
  private _prismaClient: PrismaClient;

  constructor() {
    this._prismaClient = new PrismaClient();
  }

  public async create(user: Omit<User, "id">): Promise<User> {
    return await this._prismaClient.user.create({
      data: user,
    });
  }

  public async findAll(): Promise<User[]> {
    return await this._prismaClient.user.findMany();
  }

  public async findById(id: number): Promise<User | null> {
    return await this._prismaClient.user.findUnique({
      where: {
        id,
      },
    });
  }

  public async update(id: number, user: User): Promise<User> {
    return await this._prismaClient.user.update({
      where: {
        id,
      },
      data: user,
    });
  }

  public async delete(id: number): Promise<User> {
    return await this._prismaClient.user.delete({
      where: {
        id,
      },
    });
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
}
