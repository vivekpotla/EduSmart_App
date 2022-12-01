import express from "express";
import {getAllFaculties,Signup,login} from "../controllers/facultyController.js";

const facultyRouter = express.Router();

facultyRouter.get("/",getAllFaculties);
facultyRouter.post("/signup",Signup);
facultyRouter.post("/login",login);

export default facultyRouter;