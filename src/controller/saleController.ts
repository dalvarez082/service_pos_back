import  { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });

export const create = async (req: Request, res: Response) => {
  
  try {
    const item = await prisma.sale.create({ data: req.body.sale });
    console.log(req.body)
    console.log(item)

    // for (let i = 0; i < req.body.products.length; i++) {
    //   await prisma.product_sale
    // }

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
    const item = await prisma.sale.update({
      where: {
        id_sale: idAsNumber,
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
    const idAsNumber = parseInt(id,10);
    const item = await prisma.sale.delete({
      where: {
        id_sale: idAsNumber,
      },
    });
    res.status(200).json(item);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const items = await prisma.sale.findMany();
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
    const item = await prisma.sale.findUnique({
      where: {
        id_sale: idAsNumber,
      },
    });
    res.status(200).json(item);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
