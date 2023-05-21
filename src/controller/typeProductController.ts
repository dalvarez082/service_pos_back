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
    const idAsNumber = parseInt(id,10);
    const item = await prisma.type_product.delete({
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