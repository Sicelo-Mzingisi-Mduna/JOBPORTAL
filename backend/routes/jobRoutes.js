const express = require("express");
const {
createJob, 
getJobs, 
getJobById, 
updateJob, 
deleteJob,
toggleCloseJob,
getJobsEmployer,
} = require("../controllers/jobController");
const {protect} = require("../middlewares/authMiddleware");

const router = express.Router();

//Public Routes

// 2) Read(GET)
router.get("/", getJobs);
router.get("/:id", getJobById);

//Protected Routes

// 1) Create(POST)
router.post("/", protect, createJob);

//2) Read(GET)
router.get("/get-jobs-employer", protect, getJobsEmployer);

//3) Update(PUT)
router.put("/:id", protect, updateJob);
router.put("/close-job/:id", protect, toggleCloseJob);

//4) Delete(DELETE)
router.delete("/:id", protect, deleteJob);

module.exports = router;