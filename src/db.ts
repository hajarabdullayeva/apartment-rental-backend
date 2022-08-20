import mongoose from "mongoose";

const url = "mongodb://localhost:27017";

(async () => {
  try {
    await mongoose.connect(url, { dbName: "Rent" });
  } catch (error) {
    console.log(error);
  }
})();

export default mongoose;
