const express = require("express");
const {
saveJob, 
unsaveJob, 
getMySavedJobs, 
} = require("../controllers/SavedJobController");
const {protect} = require("../middlewares/authMiddleware");

const router = express.Router();
//Create (POST)
router.post("/:jobId", protect, saveJob);

//Read (GET)
router.get("/my", protect, getMySavedJobs);

//Update (PUT)

//Delete (DELETE)
router.delete("/:jobId", protect, unsaveJob);

module.exports = router;