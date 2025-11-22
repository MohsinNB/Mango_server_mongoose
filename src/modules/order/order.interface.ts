import { Model, Types } from "mongoose";

// userId, mangoId, quantity, totalprice, status, address
export interface IOrder {
  userID: Types.ObjectId;
  mangoID: Types.ObjectId;
  quantity: number;
  totalPrice: number;
  status: "Order recieved" | "Processing" | "Completed";
  address: {
    zipCode: string;
    state: string;
    country: string;
    street: string;
  };
}

export interface IorderMethods {
  checkStock(id: string): Promise<any>;
}

export interface IorderModel extends Model<IOrder, {}, IorderMethods> {}
