import mongoose from "mongoose";

(async () => {
   const db = mongoose.connect("mongo://localhost/nostatenodelogin");
  console.log(db.connection.name)
})();
