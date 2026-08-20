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
router.get("/", getJobs);       //Get_All_Filter

// Protected specific route — must come BEFORE /:id
router.get("/get_jobs_employer", protect, getJobsEmployer);   //Get_All

// Then dynamic route
router.get("/:id", getJobById); //Get_One

//Protected Routes

// 1) Create(POST)
router.post("/", protect, createJob);


//3) Update(PUT)
router.put("/close-job/:id", protect, toggleCloseJob);
router.put("/:id", protect, updateJob);


//4) Delete(DELETE)
router.delete("/:id", protect, deleteJob);

module.exports = router;