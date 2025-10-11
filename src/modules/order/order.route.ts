import { Router } from "express";
import { orderController } from "./order.controller";

const orderRoute = Router();

orderRoute.post("/order", orderController.createOrder);
orderRoute.get("/order", orderController.getOrder);

export default orderRoute;
