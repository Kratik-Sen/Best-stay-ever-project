import express from "express"
import {loginController, logOutController, sighUpController } from "../controllers/auth.controller.js"

const authRouter = express.Router()

authRouter.post("/signup",sighUpController) // http://localhost:3000/api/auth/signup
authRouter.post("/login",loginController)
authRouter.post("/logout",logOutController)
export default authRouter