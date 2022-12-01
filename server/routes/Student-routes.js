import express from "express";
import {getAllStudents ,Signup ,login} from "../controllers/studentController.js";

const studentrouter = express.Router();

studentrouter.get("/",getAllStudents);
studentrouter.post("/signup",Signup);
studentrouter.post("/login",login);

export default studentrouter;