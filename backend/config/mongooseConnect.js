const mongoose = require("mongoose");


const mongoDBConnect = async () => {
  await mongoose.connect("mongodb://0.0.0.0:27017/UserDataCollection", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log("Database Connected"))
    .catch((error) => console.error("Database Connection Error:", error));
};

module.exports= mongoDBConnect
