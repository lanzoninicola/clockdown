import type { PrismaClient, Product } from "@prisma/client";
// @ts-ignore
import prismaClient from "prisma/client/prisma-client.server";
import type { BaseRepository } from "../common/types/global";

export default class PrismaProductsRepository implements BaseRepository {
  private _prismaClient: PrismaClient;

  constructor() {
    // @ts-ignore
    this._prismaClient = prismaClient;
  }

  public async create(product: Omit<Product, "id">): Promise<Product> {
    return await this._prismaClient.product.create({
      data: product,
    });
  }

  public async findAll(): Promise<Product[]> {
    return await this._prismaClient.product.findMany();
  }

  public async findById(id: number): Promise<Product | null> {
    return await this._prismaClient.product.findUnique({
      where: {
        id,
      },
    });
  }

  public async update(id: number, product: Product): Promise<Product> {
    return await this._prismaClient.product.update({
      where: {
        id,
      },
      data: product,
    });
  }

  public async delete(id: number): Promise<Product> {
    return await this._prismaClient.product.delete({
      where: {
        id,
      },
    });
  }
}
