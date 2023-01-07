const express = require("express");
const connectDB = require("./config/db");
const app = express();
var cors = require("cors");

app.use(
  cors({
    origins: "*:* http://localhost:* https://* *",
  })
);
//require("./passport")(passport);
//connectDB
connectDB();
// Init Middleware
app.use("/uploads", express.static("uploads"));
app.use(express.json({ extanded: false }));

//app.use(passport.session());
//app.use(express.json);

app.get("/", (req, res) => res.send("API running"));
// Define routes

app.use("/api/reports", require("./routes/api/reports"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));