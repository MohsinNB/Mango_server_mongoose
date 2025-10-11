import { Router } from "express";
import { getUsers, registerUser } from "./user.controller";

const userRoute = Router();

userRoute.post("/user", registerUser);
userRoute.get("/users", getUsers);

export default userRoute;
