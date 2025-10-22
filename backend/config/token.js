import jwt from "jsonwebtoken"

//structure be like:-  let token = jwt.sign({userId: "abc123"}, "mysecret", {expiresIn: "7d"})

const genToken= async (userId) => {
    try {
        let token = await jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"7d"})
        return token
    } catch (error) {
        console.log("token error")
    }
    
}
export default genToken