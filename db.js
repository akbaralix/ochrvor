// db.js
import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://akbarali707p_db_user:lNzD9gWvSR16hq8b@cluster0.ocv05fh.mongodb.net/?appName=Cluster0"
);

mongoose.connection.once("open", () => {
  console.log("✅ MongoDB ulandi");
});

mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB xato:", err);
});

export default mongoose;
