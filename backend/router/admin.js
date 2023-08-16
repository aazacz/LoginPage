const adminController = require("../controller/adminController");
const express = require("express");

const adminRoute = express();
const multer        = require('multer')
const path          = require('path')

adminRoute.use(express.static("public"))   

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


adminRoute.post("/login", adminController.login);
adminRoute.get('/userlist',adminController.userlist)
adminRoute.post('/create',upload.single('image'),adminController.create)
adminRoute.post('/removeuser',adminController.removeuser)
adminRoute.post('/update',upload.single('image'),adminController.update)
module.exports = adminRoute;
