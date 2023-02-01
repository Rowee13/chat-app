const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect() {
  mongoose
    .set("strictQuery", false)
    .connect(
      `mongodb+srv://chat-user-db1:${process.env.DB_PASSWORD}@user-auth.yhqn7uj.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas");
    })
    .catch((error) => {
      console.log("Unable to connect to Mongos Atlas");
      console.error(error);
    });
}

module.exports = dbConnect;
