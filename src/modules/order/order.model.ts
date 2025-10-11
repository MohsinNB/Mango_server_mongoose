import { model, Schema } from "mongoose";
import { IOrder } from "./order.interface";

const orderAddressSchema = new Schema({
  zipCode: String,
  state: String,
  country: String,
  street: String,
});
const orderSchema = new Schema<IOrder>({
  user: { type: Schema.Types.ObjectId, required: true },
  mango: { type: Schema.Types.ObjectId, required: true },
  totalPrice: { type: Number, min: 0, required: true },
  quantity: { type: Number, min: 0, required: true },
  address: { type: orderAddressSchema, required: true },
  status: { type: String, enum: ["Order recieved", "Processing", "Completed"] },
});

const orderModel = model("order", orderSchema);

export default orderModel;
