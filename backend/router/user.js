const userController = require("../controller/userController");
const express = require("express");
const userRoute = express();
userRoute.use(express.urlencoded({ extended: true }))
const multer        = require('multer')
const path          = require('path')

userRoute.use(express.static("public"))   

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"../frontend/public")
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
    }
})

const upload = multer({
    storage:storage

})



userRoute.post("/login", userController.login);
userRoute.post("/signup", userController.signup);
userRoute.post("/updateProfile",upload.single('image'),userController.updateProfile);

module.exports = userRoute;
