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

orderSchema.pre("save", async function () {
  // console.log("doc from pre", this);

  const mango = await Mango.findById(this.mangoID);
  if (!mango) {
    throw new Error("Mango not found");
  } else {
    this.totalPrice = mango.price * this.quantity;
  }

});

// This is for instance methods **there is a different way to make this with static method**
orderSchema.method("checkStock", async function checkStock(id) {
  const mango = await Mango.findById(id)
  if(!mango) {
    throw new Error ("Mango not found")
  }else if(mango.stock < this.quantity){
    throw new Error("Insufficent stock")
  }else{
    await Mango.findByIdAndUpdate(id, {
      $inc: { stock: -this.quantity },
  }) }
 
  return true
  // console.log(id);
});
const orderModel = model<IOrder, IorderModel>(
  "order",
  orderSchema
); //error happened

export default orderModel;
