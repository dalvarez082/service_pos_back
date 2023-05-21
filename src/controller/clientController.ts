import  { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });

export const create = async (req: Request, res: Response) => {
  try {
    const item = await prisma.client.create({ data: req.body });
    res.status(201).json(item);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const item = await prisma.client.update({
      where: {
        cc_client: id,
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
    const item = await prisma.client.delete({
      where: {
        cc_client: id,
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
    const items = await prisma.client.findMany();
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
    const item = await prisma.client.findUnique({
      where: {
        cc_client: id,
      },
    });
    res.status(200).json(item);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
