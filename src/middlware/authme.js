import userSchema from "../Models/user.model.js";
import { verifyToken } from "../utils/helper.js"



export const auth_me = async(req,res,next)=>{
    console.log("Hi");
    
    const token = req.cookies.accessToken
    console.log(token);
    // const {slug} = req.body;
    
    if(!token) return res.status(401).json({
        message:"Unauthorized"
    })

    try{
        const decoded = verifyToken(token);
        
        
        const user = await userSchema.findOne({_id:decoded.id});
        
        if(!user) return res.status(402).json({ message:"Unauthorized"});
        // console.log(user);
        
        req.user = user;
        next();
    }catch(error){
        return res.status(403).json({ message:"Unauthorized"});
    }
}