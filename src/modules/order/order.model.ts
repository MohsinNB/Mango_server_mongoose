import { Schema } from "mongoose";
import { IOrder } from "./order.interface";

const orderSchema = new Schema<IOrder>({
  user: { type: Schema.Types.ObjectId },
  mango: { type: Schema.Types.ObjectId },
  totalPrice: { type: Number, min: 0 },
  quantity: { type: Number, min: 0 },
  address: {
    zipCode: { type: Number },
  },
  status: {
    enum: ["Order recieved", "Processing", "Completed"],
  },
});
