import express, { Router } from "express";
import { SignUp } from "../Controller/authcontroller.js";

const router = express.Router();

router.post("/signup", SignUp);

export default router;
