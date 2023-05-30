import express, { Express, Request, Response } from "express";
import {
  userRouter,
  clientRouter,
  productRouter,
  saleRouter,
  typeProductRouter,
  // productSaleRouter
} from "./router";
import cors from "cors";

const app: Express = express();

const port: string = process.env.PORT || "3001";

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/client", clientRouter);
app.use("/product", productRouter);
app.use("/sale", saleRouter);
app.use("/typeProduct", typeProductRouter);
// app.use("/productSale", productSaleRouter);

app.listen(port, () => {
  console.log("server initialized");
});
