import express, { Router } from "express";
import { register, generateToken } from "../controller/userController";
import { generateHash, login } from "../middleware";

const router: Router = express.Router();

router.post("/", generateHash, register);
router.post("/login", login, generateToken);

export default router;
