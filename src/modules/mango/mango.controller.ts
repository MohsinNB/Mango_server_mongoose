import { Request, Response } from "express";
import Mango from "./mango.model";

const createMango = async (req: Request, res: Response) => {
  try {
    const data = await Mango.create(req.body);

    res.send({
      success: true,
      message: "Mango added successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Error happened",
      error,
    });
  }
};
const getMangoes = async (req: Request, res: Response) => {
  try {
    const data = await Mango.find();

    res.send({
      success: true,
      message: "Mango retrieved successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Error happened",
      error,
    });
  }
};
const getMangoByID = async (req: Request, res: Response) => {
  try {
    const mangoID = req.params.mangoID;
    const data = await Mango.findById(mangoID);

    res.send({
      success: true,
      message: "Mango retrieved successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Error happened",
      error,
    });
  }
};
const updateMangoByID = async (req: Request, res: Response) => {
  try {
    const mangoID = req.params.mangoID;
    const data = await Mango.findByIdAndUpdate(mangoID, req.body, {
      new: true,
      runValidators: true,
    });

    res.send({
      success: true,
      message: "Mango updated successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Error happened",
      error,
    });
  }
};
const deleteMangoByID = async (req: Request, res: Response) => {
  try {
    const mangoID = req.params.mangoID;
    const data = await Mango.findByIdAndDelete(mangoID);

    res.send({
      success: true,
      message: "Mango deleted successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Error happened",
      error,
    });
  }
};

export const mangoController = {
  createMango,
  getMangoes,
  getMangoByID,
  updateMangoByID,
  deleteMangoByID,
};
