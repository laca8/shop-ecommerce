const express = require("express");
const connectDB = require("./db");
const products = require("./routes/productRoutes");
const users = require("./routes/userRoutes");
const orderRoute = require("./routes/orderRoute");
const uploadRoute = require("./routes/uploadRoute");
const path = require("path");
const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("this is from backend");
  console.log(__dirname);
});
app.use("/upload", express.static(path.join(__dirname, "/upload")));
//router
app.use("/api/products", products);
app.use("/api/users", users);
app.use("/api/orders", orderRoute);
app.use("/api/upload", uploadRoute);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
