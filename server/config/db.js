import mongoose from "mongoose";

const connectToDb = async() => {
await mongoose
    .connect(process.env.DB_LOCALHOST_CONN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("CONNECTED DB SUCCESSFULLY");
    })
    .catch(() => {
      console.log("DB FAIL Oops");
    });
};

export default connectToDb;