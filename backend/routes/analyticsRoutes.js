const express = require("express");
const {
getEmployerAnalytics
} = require("../controllers/analyticsController");
const {protect} = require("../middlewares/authMiddleware");

const router = express.Router();
//Create = POST

//Read = GET
router.get("/overview", protect, getEmployerAnalytics);

//Update = PUT

//Delete = DELETE


module.exports = router;