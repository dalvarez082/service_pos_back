import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });

export const create = async (req: Request, res: Response) => {
  try {
    const item = await prisma.type_product.create({ data: req.body });
    res.status(201).json(item);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const idAsNumber = parseInt(id,10);
    const item = await prisma.type_product.update({
      where: {
        id_type: idAsNumber,
      },
      data: req.body,
    });
    res.status(200).json(item);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const deleteOne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const idAsNumber = parseInt(id, 10);

    // Iniciar transacción
    await prisma.$transaction(async (prisma) => {
      // Comprobar si existen productos que utilizan el tipo de producto
      const existingProducts = await prisma.product.findMany({
        where: {
          id_type: idAsNumber,
        },
      });

      if (existingProducts.length > 0) {
        // Retornar un aviso indicando que no se puede eliminar el tipo de producto
        return res.status(400).json({ message: "No se puede eliminar el tipo de producto. Está siendo utilizado por productos existentes." });
      }

      // No hay productos que utilicen el tipo de producto, proceder con la eliminación
      const item = await prisma.type_product.delete({
        where: {
          id_type: idAsNumber,
        },
      });

      res.status(200).json(item);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const items = await prisma.type_product.findMany();
    if (items.length >= 1) {
      res.status(200).json(items);
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const idAsNumber = parseInt(id,10);
    const item = await prisma.type_product.findUnique({
      where: {
        id_type: idAsNumber,
      },
    });
    res.status(200).json(item);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};