import { Router } from "express";
import userRoute from "../user/user.route";
import mangoRoute from "../mango/mango.route";

const routes = Router();

routes.use(userRoute);
routes.use(mangoRoute);

export default routes;
