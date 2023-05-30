/*
  Warnings:

  - The `id_sale` column on the `product_sale` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `sale` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id_sale` column on the `sale` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "product_sale" DROP CONSTRAINT "product_sale_id_sale_fkey";

-- AlterTable
ALTER TABLE "product_sale" DROP COLUMN "id_sale",
ADD COLUMN     "id_sale" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "sale" DROP CONSTRAINT "sale_pkey",
DROP COLUMN "id_sale",
ADD COLUMN     "id_sale" SERIAL NOT NULL,
ADD CONSTRAINT "sale_pkey" PRIMARY KEY ("id_sale");

-- AddForeignKey
ALTER TABLE "product_sale" ADD CONSTRAINT "product_sale_id_sale_fkey" FOREIGN KEY ("id_sale") REFERENCES "sale"("id_sale") ON DELETE CASCADE ON UPDATE NO ACTION;
