import { PrismaClient } from "@prisma/client";

let prismaClient: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prismaClient = new PrismaClient();
} else {
  // Ensure the prisma instance is re-used during hot-reloading
  if (!global.prismaClient) {
    global.prismaClient = new PrismaClient();
  }

  prismaClient = global.prismaClient;
}

export default prismaClient;
