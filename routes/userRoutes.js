const express = require("express");
const {
    registerUser,
    loginUser,
    getUserProfile,
} = require("../controllers/userController");
const router = express.Router();

// Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getUserProfile);

module.exports = router;
