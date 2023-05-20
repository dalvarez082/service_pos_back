import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient({ log: ["query"] });

export const generateHash = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password_user: passwordUser } = req.body;
    const hash = await bcrypt.hash(passwordUser, 10);

    req.body.password_user = hash;
    next();
  } catch (error) {
    res.status(500).json(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await prisma.pos_user.findUnique({
      where: {
        cc_user: req.body.user,
      },
    });
    console.log(user?.password_user);
    const passwordUser: string = user?.password_user || "";

    const isValid = await bcrypt.compare(req.body.password, passwordUser);
    if (isValid) {
        req.body.user = user
        next()
    }
    else{
        res.status(403).send()
    }
    console.log(isValid);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
