import { model, Schema } from "mongoose";
import { IOrder } from "./order.interface";
import Mango from "../mango/mango.model";

const orderAddressSchema = new Schema({
  zipCode: String,
  state: String,
  country: String,
  street: String,
});
const orderSchema = new Schema<IOrder>(
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

// orderSchema.pre("save", async function () {
//   console.log("doc from pre", this);

//   const mango = await Mango.findById(this.mango);
//   if (!mango) {
//     throw new Error("Mango not found");
//   } else {
//     this.totalPrice = mango.price * this.quantity;
//   }
// });
const orderModel = model("order", orderSchema);

export default orderModel;
