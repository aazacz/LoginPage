const express = require("express");
const userDb  = require("../model/user");
const bcrypt  = require("bcrypt");
const jwt     = require('jsonwebtoken')
//password Hashing
const passwordHash = async (password) => {
  try {
    const passwordHash = await bcrypt.hash(password, 5);
    return passwordHash;
  } catch (error) {
    console.log(error.message);
  }
};

const login = async (req, res) => {
  console.log("req.body");
  console.log(req.body);
  try {
    const userlog = await userDb.findOne({ email: req.body.email })
    if (userlog) {
        const passwordmatch = await bcrypt.compare(req.body.password, userlog.password)

        if (passwordmatch) {
            if (userlog.isAdmin == 1) {
               
            const token = jwt.sign({_id:userlog.email},"mynameisabhilashabinzachariah",{expiresIn:"1 hour"})
            console.log(token);
            
            const userVer =  jwt.verify(token,"mynameisabhilashabinzachariah")
            console.log(userVer);
                res.json({status:"success",
                          image:userlog.image,
                          name:userlog.name,
                          token,
                          login:true,
                          email:userlog.email})
            }
            else {
                res.json({status:"failed", error:"admin is unauthorised"})
                console.log("admin is unauthorised");
            }
        }
        else {
            console.log("password incorrect");
            res.json({status:"failed", error:"password is incorrect"})
        }
    }
    else {
        console.log("username incorrect");
        res.json({status:"failed", error:"username is incorrect"})
    }
} catch (error) {
  res.status(500).json({ status: "failed", error: "password is incorrect" });
    console.log(error.message);
}
  return;
};

// requesting the users List
const userlist = async (req, res) => {
  const userdetails = await userDb.find();
  res.json({ status: "success", userdetails });
};

// creating a new user
const create = async (req, res) => {
  try {
    console.log("req.file");
    console.log(req.file);
    console.log(req.file.filename);
    console.log(req.body);
    const passwordH = await passwordHash(req.body.password);

    const data = new userDb({
      name: req.body.name,
      email: req.body.email,
      password: passwordH,
      image: req.file.filename,
    });

    await data.save();
    return res.json({ Status: "success" });
  } catch (error) {
    console.log(error);
  }
};


//to remove a user
const removeuser=async(req,res)=>{
try {
    const result = await userDb.deleteOne({ _id: req.body.userId });
    return res.json({ Status: "success" });
} catch (error) {
  console.log(error);
}

}

//to update the user
const update = async(req,res)=>{
  try {
    console.log("1");
    if(req.file){
      console.log("2"); 
      console.log(req.file.filename);
      console.log(req.body.name);
      console.log(req.body.email);
     
  
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
                                  
                  });
    }
    else{
      console.log("3"); 
      console.log(req.body.name);
      console.log(req.body.email);
     
  
  const updatedata = {
                    name: req.body.name,
                    email: req.body.email
             
  }
  
      const userdata = await userDb.updateOne({ email: req.body.email }, { $set: updatedata })
      return res.json({ Status: "success",
                        name: req.body.name,
                        email:req.body.email,
                        image:userdata.image,
                                  
                  });
    }
    
} catch (error) {
    console.log(error);
    return res.status(500).json({ Status: "errorrrr"});

}

}


module.exports = {
  login,
  userlist,
  create,
  removeuser,
  update

};
