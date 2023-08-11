const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const userDb = require("../model/user");


//password Hashing
const passwordHash = async (password) => {
  try {
    const passwordHash = await bcrypt.hash(password, 5);
    return passwordHash;
  } catch (error) {
    console.log(error.message);
  }
};


const verifyToken=async(token)=>{
    const userVer = await jwt.verify(token,"mynameisabhilashabinzachariah")
    console.log(userVer);
}


const login = async(req,res)=>{

    try {
        console.log(req.body.email);
        const tokenProducer = req.body.email
        console.log("haiii")
        const user= await userDb.findOne({email:tokenProducer})
        console.log(" find");
        console.log(user);
            const token = await jwt.sign({_id:tokenProducer},"mynameisabhilashabinzachariah",{expiresIn:"1 hour"})
            console.log(token);
            
            const userVer = await jwt.verify(token,"mynameisabhilashabinzachariah")
            console.log(userVer);
                         
            res.json({status:"success",
                      image:user.image,
                      name:user.name,
                      token,
                      login:true,
                      email:tokenProducer})
            
           
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", error: "Server error" });
    }

}


const signup=async(req,res)=>{


    try {
        const {email,name,password} = req.body
        console.log(email,name,password);
        const passwordH = await passwordHash(req.body.password);
        const data = new userDb({
        name: req.body.name,
        email: req.body.email,
        password: passwordH,
     
      });
        await data.save();

      return res.json({ Status: "success" });
    } catch (error) {
        console.log(error);
      res.json(500,error);
    }
    
}


const updateProfile = async(req,res)=>{

    try {
        console.log(req.file.filename);
        console.log(req.body.name);
        console.log(req.body.email);
        console.log(req.body.token);

const updatedata = {
    name: req.body.name,
    email: req.body.email,
    image:req.file.filename
}

  

        const userdata = await userDb.updateOne({ email: req.body.email }, { $set: updatedata })
        return res.json({ Status: "success",
                        name: req.body.name,
                        email:req.body.email,
                        image:req.file.filename,
                        login:true,
                        token:req.body.token
                    });
    } catch (error) {
        console.log(error);
    }


}



module.exports={login,
                signup,
                updateProfile}