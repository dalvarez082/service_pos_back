-- CreateTable
CREATE TABLE "client" (
    "cc_client" VARCHAR(12) NOT NULL,
    "cc_user" VARCHAR(12) NOT NULL,
    "nombre" VARCHAR(20),
    "apellido" VARCHAR(20),
    "fecha" DATE,
    "alias_client" VARCHAR(12),
    "barrio" VARCHAR(30),
    "direccion" VARCHAR(30),
    "saldo" DOUBLE PRECISION,
    "telefono" VARCHAR(20) NOT NULL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("cc_client")
);

-- CreateTable
CREATE TABLE "pos_user" (
    "cc_user" VARCHAR(12) NOT NULL,
    "id_type" SERIAL NOT NULL,
    "id_employee" VARCHAR(12),
    "nombre" VARCHAR(20),
    "apellido" VARCHAR(20),
    "imagen" BYTEA,
    "telefono" VARCHAR(20) NOT NULL,
    "password_user" VARCHAR(20) NOT NULL,

    CONSTRAINT "pos_user_pkey" PRIMARY KEY ("cc_user")
);

-- CreateTable
CREATE TABLE "product" (
    "id_product" VARCHAR(12) NOT NULL,
    "id_type" SERIAL NOT NULL,
    "cc_user" VARCHAR(12) NOT NULL,
    "nombre" VARCHAR(20),
    "precio" DOUBLE PRECISION,
    "imagen" BYTEA,
    "descripcion" VARCHAR(200),

    CONSTRAINT "product_pkey" PRIMARY KEY ("id_product")
);

-- CreateTable
CREATE TABLE "product_sale" (
    "id_sale" VARCHAR(12) NOT NULL,
    "id_product" VARCHAR(12) NOT NULL,
    "cantidad" INTEGER,
    "prestamo" INTEGER
);

-- CreateTable
CREATE TABLE "sale" (
    "id_sale" VARCHAR(12) NOT NULL,
    "cc_client" VARCHAR(12) NOT NULL,
    "fecha" DATE,
    "nota" VARCHAR(190),
    "estado" BOOLEAN,
    "abono" DOUBLE PRECISION,

    CONSTRAINT "sale_pkey" PRIMARY KEY ("id_sale")
);

-- CreateTable
CREATE TABLE "type_product" (
    "id_type" SERIAL NOT NULL,
    "nombre" VARCHAR(20),
    "descripcion" VARCHAR(200),

    CONSTRAINT "type_product_pkey" PRIMARY KEY ("id_type")
);

-- CreateTable
CREATE TABLE "type_user" (
    "id_type" SERIAL NOT NULL,
    "nombre" VARCHAR(20),
    "descripcion" VARCHAR(200),

    CONSTRAINT "type_user_pkey" PRIMARY KEY ("id_type")
);

-- AddForeignKey
ALTER TABLE "client" ADD CONSTRAINT "client_cc_user_fkey" FOREIGN KEY ("cc_user") REFERENCES "pos_user"("cc_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pos_user" ADD CONSTRAINT "pos_user_id_employee_fkey" FOREIGN KEY ("id_employee") REFERENCES "pos_user"("cc_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pos_user" ADD CONSTRAINT "pos_user_id_type_fkey" FOREIGN KEY ("id_type") REFERENCES "type_user"("id_type") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_cc_user_fkey" FOREIGN KEY ("cc_user") REFERENCES "pos_user"("cc_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_id_type_fkey" FOREIGN KEY ("id_type") REFERENCES "type_product"("id_type") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_sale" ADD CONSTRAINT "product_sale_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "product"("id_product") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_sale" ADD CONSTRAINT "product_sale_id_sale_fkey" FOREIGN KEY ("id_sale") REFERENCES "sale"("id_sale") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sale" ADD CONSTRAINT "sale_cc_client_fkey" FOREIGN KEY ("cc_client") REFERENCES "client"("cc_client") ON DELETE SET NULL ON UPDATE NO ACTION;
