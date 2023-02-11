import mongoose from 'mongoose';

const connectToDb = async () => {
  await mongoose
    .connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('CONNECTED DB SUCCESSFULLY');
    })
    .catch(() => {
      console.log('DB FAIL Oops');
    });
};

export default connectToDb;
