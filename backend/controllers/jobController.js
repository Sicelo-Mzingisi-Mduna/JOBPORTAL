const Job = require("../models/Job");
const User = require("../models/User");
const Application = require("../models/Application");
const SavedJob = require("../models/SavedJob");

//@desc Create a new job(Employer only)
exports.createJob = async (req, res) => {
  try {
    if(req.user.role !== "employer"){
      return res.status(403).json({
        message: "Unauthorized: Only employers can post jobs",
      });
    }
    const job = await Job.create({
      ...req.body,
      postedBy: req.user._id, // Foreign key(used to add columns with a table as its data value)
    });
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

//@desc Get all jobs
exports.getJobs = async (req, res) => {
    //Data Extraction process from model table
    
    //Data Extraction step(SELECT)
    const {
      keyword,
      location,
      category,
      type,
      minSalary,
      maxSalary,
      userId,
    } = req.query;

    //Data Transformation process

    //step 1 ) Data filter step(decreases y-axis(rows))
    const query = {
      isClosed: false,
      ...(keyword && {title: {$regex: keyword, $options: "i"}}),
      ...(location && {location: {$regex: location, $options: "i"}}),
      ...(category && {category}),
      ...(type && {type}),
    };

    //step 2 ) Data filter step(decreases y-axis(rows))

    if (minSalary || maxSalary){
      query.$and = [];

      if(minSalary){
      query.$and.push({salaryMax: {$gte: Number(minSalary)}});
      }

      if(maxSalary){
        query.$and.push({salaryMin: {$lte: Number(maxSalary)}});
      }

      if(query.$and.length === 0){
        delete query.$and;
      }
    }

    

    try {
      //Model my Internal relationship(data that needs to enter to enter my table)
      //step 3 ) Data Table Merge(increases x-axis(columns with a table as its value))
      const jobs = await Job.find(query).populate(
        "postedBy", // Foreign key(used to add columns with a table as its data)
        "name companyName companyLogo"
      );

      //Model my External relationships(data that needs to leave my table)
      let savedJobIds = [];
      let appliedJobStatusMap = {};

      if(userId){
        //Saved Jobs
        const savedJobs = await SavedJob.find({ jobseeker: userId }).select("job");
        savedJobIds = savedJobs.map((savedJob) => savedJob.job.toString());

        //Applied Jobs
        const applications = await Application.find({ applicant: userId }).select("job status");
        applications.forEach((app) => {
          appliedJobStatusMap[app.job.toString()] = app.status;
        });
      }

      //Add isSaved and applicationStatus to each job
      const jobsWithUserData = jobs.map((job) => {
        const jobIdStr = job._id.toString();
        return {
          //add columns with data values
          ...job.toObject(),
          isSaved: savedJobIds.includes(jobIdStr),
          applicationStatus: appliedJobStatusMap[jobIdStr] || "You have not Applied to this Job",
        };
      });
      res.json(jobsWithUserData);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
};

//@desc Get jobs for logged in users(Employer can see posted jobs)
exports.getJobsEmployer = async (req, res) => {
  try {
    const jobs = await Job.find({ postedBy: req.user.id }).populate(
      "postedBy",
      "name email"
    );
    res.json(jobs);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

//@desc Get single job by ID
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate(
      "postedBy",
      "name email"
    );
    res.json(job);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

//@desc Update a job(Employers only)
exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }
    if (job.postedBy.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }
    const { title, description, location, salary } = req.body;
    job.title = title || job.title;
    job.description = description || job.description;
    job.location = location || job.location;
    job.salary = salary || job.salary;
    await job.save();
    res.json(job);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

//@desc Delete a job (Employer only)
exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }
    if (job.postedBy.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }
    await Job.findByIdAndDelete(req.params.id);
    res.json({
      message: "Job deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

//@desc Toggle close status fora job(Employer only)
exports.toggleCloseJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }
    if (job.postedBy.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }
    job.isClosed = !job.isClosed;
    await job.save();
    res.json(job);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};