import { model, Schema } from "mongoose";
import { Iuser } from "./user.intertface";

const userSchema = new Schema<Iuser>({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
      },
      message: "email is not valid",
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v);
      },
      message:
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number. Special characters are not allowed.",
    },
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^(\+?8801[3-9]\d{8}|01[3-9]\d{8})$/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number`,
    },
  },
  role: {
    type: String,
    enum: {
      values: ["Admin", "customer"],
      message: "{VALUE} is not acceptable",
    },
    required: true,
    default: "customer",
  },
});

const User = model<Iuser>("User", userSchema);
export default User;
