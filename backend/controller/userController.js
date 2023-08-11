const express = require("express");
const userModel = require("../model/user");
const bcrypt = require("bcrypt");

const login = async(req,res)=>{

    try {
        console.log(req.body.email);
        console.log("haiii")
        res.json({status:"haiii"})
    } catch (error) {
        console.log(error);
    }

}

module.exports={login}