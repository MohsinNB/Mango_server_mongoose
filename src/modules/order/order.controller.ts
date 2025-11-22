import { Request, Response } from "express";
import orderModel from "./order.model";

const createOrder = async (req: Request, res: Response) => {
  try {
  // const order = await orderModel.create(req.body);
  const order = new orderModel(req.body)
  const checkStock = await order.checkStock(req.body.mangoID);
  console.log(!checkStock)

  // if (checkStock) throw new Error("Insufficient stock");
  await order.save()

  res.send({
    success: true,
    message: "ORDER created successfully",
    order,
  });
} catch (error: unknown) {
  if (error instanceof Error) {
    res.status(400).send({
      success: false,
      message: error.message,  
    });
  } else {
    
    res.status(400).send({
      success: false,
      message: "An unknown error occurred",
    });
  }
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
