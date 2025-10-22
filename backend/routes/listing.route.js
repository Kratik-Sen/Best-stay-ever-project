import express from "express"
import isAuth from "../middleware/isAuth.js"
import upload from "../middleware/multer.js"
import { addListing, deleteListing, findListing, getListing, ratingListing, search, updateListing } from "../controllers/listing.controller.js"

let listingRouter = express.Router()

//single img hoti to upload.single likhte
// but 3 image he to upload.fields likhte
listingRouter.post("/add",isAuth,upload.fields([
    {name:"image1",maxCount:1},
    {name:"image2",maxCount:1},
    {name:"image3",maxCount:1}
]),addListing)

listingRouter.get("/get",getListing)
listingRouter.get("/findlistingbyid/:id",isAuth,findListing) //p7 http://localhost:5173/api/listing/findlistingbyid/:id
listingRouter.delete("/delete/:id",isAuth,deleteListing)
listingRouter.post("/ratings/:id",isAuth,ratingListing)
listingRouter.get("/search",search) //http://localhost:5173/api/listing/search


listingRouter.post("/update/:id",isAuth,upload.fields([
    {name:"image1",maxCount:1},
    {name:"image2",maxCount:1},
    {name:"image3",maxCount:1}
]),updateListing)

export default listingRouter