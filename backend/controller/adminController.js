const express = require("express");
const userDb = require("../model/user");
const bcrypt = require("bcrypt");

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
  console.log("req.body")
  console.log(req.body.userId)
    const result = await userDb.deleteOne({ _id: req.body.userId });

    console.log(`${result.deletedCount} document(s) deleted`);
    return res.json({ Status: "success" });
} catch (error) {
  console.log(error);
}

}


module.exports = {
  login,
  userlist,
  create,
  removeuser,

};
