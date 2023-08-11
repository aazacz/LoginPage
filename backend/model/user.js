const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
name:{
    type:String,
    required:true

},
email: {
    type: String,
    required: true
},
password: {
    type: String,
    required: false
},
image: {
    type: String,
    required: false
},
isAdmin:{
    type:Number,
    required:true,
    default:0
}
})

const customerdetail= new mongoose.model("customerDetail",userSchema)
module.exports=customerdetail