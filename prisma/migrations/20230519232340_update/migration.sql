/*
  Warnings:

  - You are about to alter the column `imagen` on the `pos_user` table. The data in that column could be lost. The data in that column will be cast from `ByteA` to `VarChar(1000)`.
  - You are about to alter the column `imagen` on the `product` table. The data in that column could be lost. The data in that column will be cast from `ByteA` to `VarChar(1000)`.

*/
-- AlterTable
ALTER TABLE "pos_user" ALTER COLUMN "imagen" SET DATA TYPE VARCHAR(1000);

-- AlterTable
ALTER TABLE "product" ALTER COLUMN "imagen" SET DATA TYPE VARCHAR(1000);
