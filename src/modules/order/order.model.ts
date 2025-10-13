import { Model, model, Schema } from "mongoose";
import { IOrder, IorderMethods, IorderModel } from "./order.interface";
import Mango from "../mango/mango.model";

const orderAddressSchema = new Schema({
  zipCode: String,
  state: String,
  country: String,
  street: String,
});
const orderSchema = new Schema<IOrder, IorderModel, IorderMethods>(
  {
    userID: { type: Schema.Types.ObjectId, ref: "User", required: true },
    mangoID: { type: Schema.Types.ObjectId, ref: "Mango", required: true },
    totalPrice: { type: Number, min: 0 },
    quantity: { type: Number, min: 0, required: true },
    address: { type: orderAddressSchema, required: true },
    status: {
      type: String,
      enum: ["Order recieved", "Processing", "Completed"],
    },
  },
  { versionKey: false, timestamps: true }
);

orderSchema.post("save", async function (doc, next) {
  console.log("doc from post", doc);

  const mango = await Mango.findById(doc.mangoID);
  if (!mango) {
    throw new Error("Mango not found");
  } else {
    doc.totalPrice = mango.price * doc.quantity;
  }
  next();
});

orderSchema.method("checkStock", function checkStock(id) {
  console.log(id);
});
const orderModel = model<IOrder, IorderModel, IorderMethods>(
  "order",
  orderSchema
); //error happened

export default orderModel;
