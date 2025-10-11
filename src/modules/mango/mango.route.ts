import { Router } from "express";
import { mangoController } from "./mango.controller";

const mangoRoute = Router();
mangoRoute.post("/mango", mangoController.createMango);
mangoRoute.get("/mango/:mangoID", mangoController.getMangoByID);
mangoRoute.patch("/mango/:mangoID", mangoController.updateMangoByID);
mangoRoute.delete("/mango/:mangoID", mangoController.deleteMangoByID);
mangoRoute.get("/mango", mangoController.getMangoes);
export default mangoRoute;
