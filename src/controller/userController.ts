import express, {Request,Response} from "express"
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken';


const prisma = new PrismaClient({log:["query"]})


export const register = async(req:Request,res:Response)=>{
    try {
        const user = await prisma.pos_user.create({data:req.body})   
        res.status(201).send()

    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

export const generateToken = async(req:Request,res:Response)=>{
    try {
        const token = jwt.sign({nombre:req.body.user.nombre }, process.env.HASH || "");
        res.json({token})
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}


