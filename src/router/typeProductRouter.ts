import express, { Router } from "express";
import {
  create,
  update,
  getAll,
  getOne,
  deleteOne,
} from "../controller/typeProductController";
import { validateToken } from "../middleware";

const router: Router = express.Router();

router.get("/", validateToken, getAll);
router.get("/:id", validateToken, getOne);
router.delete("/:id", validateToken, deleteOne);
router.put("/:id", validateToken, update);
router.post("/", validateToken, create);

export default router;
