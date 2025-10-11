import { Types } from "mongoose";

// userId, mangoId, quantity, totalprice, status, address
export interface IOrder {
  user: Types.ObjectId;
  mango: Types.ObjectId;
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
