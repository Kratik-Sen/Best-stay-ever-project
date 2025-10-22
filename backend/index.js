import express from 'express'
import connectDb from './config/db.js'
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser'
import cors from "cors"
import userRouter from './routes/user.route.js'
import ListingRouter from './routes/listing.route.js'
import bookingRouter from './routes/booking.route.js'
dotenv.config()
const PORT = process.env.PORT || 8000
const app = express()

//middleware --------------------------------
app.use(express.json())//not show undfined in req.body
// to parse token in cookie
app.use(cookieParser())
app.use(cors({ // use this to remove cors error
  origin: "http://localhost:5173", //not forget to remove / from http://localhost:5173/
  credentials: true
}))
//middleware --------------------------------

app.get('/',(req,res)=>{
  res.send('hello from server')

})

app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)
app.use('/api/listing',ListingRouter)
app.use('/api/booking',bookingRouter)

 
app.listen(PORT,()=>{
  connectDb()
  console.log(`server is running on port ${PORT}`);
})