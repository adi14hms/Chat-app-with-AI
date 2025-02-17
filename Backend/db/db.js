import mongoose from "mongoose";

function connect() {
  mongoose.connect(process.env.MONGODB_URI)
         .then(() => {
           console.log("Database connection successful");
         })
         .catch((err) => {
           console.error("Database connection error");
           console.error(err);
         });
}
export default connect;