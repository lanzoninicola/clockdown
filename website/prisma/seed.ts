import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  await prisma.product.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      name: "Plano Pro (1 ano)",
      description: "Plano Pro (1 ano) para o Clockdown",
      unit: "UN",
      price: 120,
      currency: "BRL",
    },
  });

  console.log("Seeded successfully");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
