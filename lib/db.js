// db integration
const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODBSECRET, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDb database connected successfuly");
  } catch (error) {
    console.error(`Establishing connection to Database encountered some error: ${error}`);
  }
};

module.exports = connectToDb;
