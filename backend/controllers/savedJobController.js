const SavedJob = require("../models/SavedJob");
const Job = require("../models/Job");

//@desc Create (POST) - Save Job (job_Seeker only)
exports.saveJob  = async(req, res) => {
  try{
	//Check if the user is a jobSeeker - Authorization
	if(req.user.role.toString() === "job_seeker"){
		//check if the record doesnt already exist
		const record_check = await SavedJob.findOne({job: req.params.jobId, jobseeker: req.user.id});
		
		//check if the Job Exists
		const job_exists = await Job.findById({_id : req.params.jobId});
		
		if(record_check){
			res.status(400).json({
				message: "Creation Error! The job is already Saved"
			})
		}else{
			if(job_exists){
				const savedJob = await SavedJob.create({
				jobseeker: req.user.id,
				job:req.params.jobId
				});
				
				if(savedJob){
					res.status(201).json({
						message: "Record Creation Successful! Job Saved Succesfully",
						data: savedJob
					})
				}else{
					res.status(400).json({
						message: "Record Creation Error! Job Coulnt be Saved"
					})
				};
			}else{
				res.status(400).json({
					message: "Cannot Save a Job that doesnt exist"
				})
			}
		};
	}else{
		res.status(301).json({
			message: "Authorization Error! Only JobSeekers can Save a job"
		})
	};
  }catch(error){
    res.status(500).json({
      message: error.message})
  }
};

//@desc Read (GET) - get all my saved jobs (job_Seeker only)
exports.getMySavedJobs  = async(req, res) => {
  try{
	if(req.user.role.toString() === "job_seeker"){
		savedJobs = await SavedJob.find({jobseeker: req.user.id}).populate(
		"job",
		"title description requirements location category type postedBy salaryMin salaryMax isClosed"
		).sort({createdAt: -1});
		
		if(savedJobs){
			res.status(200).json({
				message: "Saved Jobs retrieved Successfully!",
				data: savedJobs
			})
		}else{
			res.status(400).json({
				message: "Record Retrieval error! Saved Jobs Couldnt be retrived"
			})
		};
	}else{
		res.status(400).json({
			message: "Authorization Error! Only job seekers can view their saved jobs"
		})
	}
  }catch(error){
    res.status(500).json({
      message: error.message})
  }
};

//@desc Delete (DELETE) - delete a saved job record (job_Seeker only)
exports.unsaveJob  = async(req, res) => {
  try{
	//Check Authorization
	
	if(req.user.role.toString() === "job_seeker"){
		//check if the job exists and belongs to the job_seeker
		job_exists = await SavedJob.findOne({job: req.params.jobId});
		
		if(job_exists){
			//check ownership of the job
			
			job_ownership = await SavedJob.findOne({job: req.params.jobId, jobseeker: req.user.id});
			
			if(job_ownership){
				//delete the saved job
				
				const deleted_job = await SavedJob.findOneAndDelete({job: req.params.jobId});
				
				if(deleted_job){
					res.status(200).json({
						message: "Record Deletion Success! Saved Job deleted Successfully"
					})
				}else{
					res.status(400).json({
						message: "Record Deletion Error! Saved Job couldn't be deleted"
					})
				};
			}else{
				res.status(400).json({
					message: "Record Ownership Error! You cannot delete a job that you didn't save(don't own)"
				})
			}
		}else{
			res.status(404).json({
				message: "Record Retrival Error! Cannot delete a job thats not saved"
			})
		};
		
	}else{
		res.status(400).json({
			message: "Authorization Error! Only job_seeker can Delete a saved job"
		})
	}
  }catch(error){
    res.status(500).json({
      message: error.message})
  }
};

