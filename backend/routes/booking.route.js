import express from "express"
import isAuth from "../middleware/isAuth.js"
import { cancelBooking, createBooking } from "../controllers/booking.controller.js"


let bookingRouter = express.Router()

bookingRouter.post("/create/:id",isAuth,createBooking)// http://localhost:5173//api/booking/create/:id
bookingRouter.delete("/cancel/:id",isAuth,cancelBooking)
// bookingRouter.delete("/cancel/:id",isAuth,cancelBooking)


export default bookingRouter
