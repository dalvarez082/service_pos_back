-- AlterTable
ALTER TABLE "product_sale" ADD COLUMN     "id_product_sale" SERIAL NOT NULL,
ADD CONSTRAINT "product_sale_pkey" PRIMARY KEY ("id_product_sale");
