import type { PrismaClient, Order } from "@prisma/client";
// @ts-ignore
import prismaClient from "prisma/client/prisma-client.server";
import type { BaseRepository } from "../common/types/global";

export default class PrismaOrdersRepository implements BaseRepository {
  private _prismaClient: PrismaClient;

  constructor() {
    // @ts-ignore
    this._prismaClient = prismaClient;
  }

  public async create(
    order: Omit<Order, "id" | "createdAt" | "updatedAt">
  ): Promise<Order> {
    return await this._prismaClient.order.create({
      data: order,
    });
    // try {
    //   return await this._prismaClient.order.create({
    //     data: order,
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  }

  public async findAll(): Promise<Order[]> {
    return await this._prismaClient.order.findMany();
  }

  public async findById(id: number): Promise<Order | null> {
    return await this._prismaClient.order.findUnique({
      where: {
        id,
      },
    });
  }

  public async update(id: number, order: Order): Promise<Order> {
    return await this._prismaClient.order.update({
      where: {
        id,
      },
      data: order,
    });
  }

  public async delete(id: number): Promise<Order> {
    return await this._prismaClient.order.delete({
      where: {
        id,
      },
    });
  }

  public async getOrderByUserId(userId: number): Promise<Order | null> {
    return await this._prismaClient.order.findFirst({
      where: {
        userId,
      },
    });
  }
}
