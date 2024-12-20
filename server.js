const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db")

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

// connect to mongodb
connectDB();

// routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/subscriptions", require("./routes/subscriptionRoutes"))
app.use("/api/admins", require("./routes/adminRoutes"))
app.use("/api/admins/users", require("./routes/adminRoutes"))

// start the server
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
})