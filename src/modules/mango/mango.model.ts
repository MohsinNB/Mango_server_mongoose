import { model, Schema } from "mongoose";
import { IMango } from "./mango.interface";

const mangoSchema = new Schema<IMango>(
  {
    name: { type: String, required: true, unique: true, trim: true },
    variety: { type: String, required: true, trim: true },
    unit: { type: String, enum: ["KG", "TON"], default: "KG" },
    price: { type: Number, min: 0 },
    stock: { type: Number, min: 0 },
    origin: { type: String },
    season: { type: String, enum: ["summer", "winter"] },
  },
  { timestamps: true }
);

const Mango = model<IMango>("Mango", mangoSchema);
export default Mango;
