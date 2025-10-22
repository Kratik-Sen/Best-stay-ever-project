import multer from "multer"

//store images in diskstorage then to cloudinary
let storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./public") // file public folder me jaker store ho jeigi
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload = multer({storage})

export default upload