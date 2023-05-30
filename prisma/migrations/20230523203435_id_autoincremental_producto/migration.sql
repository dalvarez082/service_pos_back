/*
  Warnings:

  - The primary key for the `product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id_product` column on the `product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `id_product` column on the `product_sale` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "product_sale" DROP CONSTRAINT "product_sale_id_product_fkey";

-- AlterTable
ALTER TABLE "product" DROP CONSTRAINT "product_pkey",
DROP COLUMN "id_product",
ADD COLUMN     "id_product" SERIAL NOT NULL,
ADD CONSTRAINT "product_pkey" PRIMARY KEY ("id_product");

-- AlterTable
ALTER TABLE "product_sale" DROP COLUMN "id_product",
ADD COLUMN     "id_product" SERIAL NOT NULL;

-- AddForeignKey
ALTER TABLE "product_sale" ADD CONSTRAINT "product_sale_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "product"("id_product") ON DELETE RESTRICT ON UPDATE NO ACTION;
