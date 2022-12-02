import express from "express";
import { getAllTests ,getTestById ,addTest} from "../controllers/testController.js";

const testRouter  = express.Router();

testRouter.get("/",getAllTests);
testRouter.get("/:id",getTestById);
testRouter.post("/addtest",addTest);

export default testRouter;