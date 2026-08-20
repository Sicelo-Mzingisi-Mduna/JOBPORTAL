const express = require("express");
const {
applyToJob, 
getMyApplications, 
getApplicationsForJob, 
getApplicationsById, 
updateStatus,
} = require("../controllers/applicationController");
const {protect} = require("../middlewares/authMiddleware");

const router = express.Router();

//protected routes
router.post("/:jobId", protect, applyToJob);
router.get("/my_applications", protect, getMyApplications);
router.get("/job/:jobId", protect, getApplicationsForJob);
router.put("/:id/status", protect, updateStatus);
router.get("/:id", protect, getApplicationsById);

module.exports = router;