const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
require("dotenv").config();
const dns = require("dns");

dns.setServers([
    "8.8.8.8",
    "8.8.4.4"
]);
const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/books", bookRoutes);

app.get("/", (req, res)=>{
    res.send("Presonal Book Manager API is running!");
});


mongoose
        .connect(process.env.MONGODB_URI)
        .then(()=>{
            console.log("Connected to MongoDB");
             const PORT = process.env.PORT || 10000;

        app.listen(PORT, "0.0.0.0", () => {
            console.log(`Server is running on ${PORT}`);
        });
        })
        .catch((err)=>{
            console.log("MongoDB connection err: ", err)
        });