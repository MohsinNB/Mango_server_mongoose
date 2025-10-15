import { Request, Response } from "express";
import orderModel from "./order.model";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = await orderModel.create(req.body)
    const checkStock = await order.checkStock(req.body.mangoID)
    res.send({
      success: true,
      message: "ORDER created successfully",
      order,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "error happened",
      error,
    });
  }
};
const getOrder = async (req: Request, res: Response) => {
  try {
    const order = await orderModel
      .find()
      .populate("mangoID")
      .populate("userID");
    res.send({
      success: true,
      message: "get order successfully",
      order,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "error happened",
      error,
    });
  }
};

export const orderController = {
  createOrder,
  getOrder,
};
