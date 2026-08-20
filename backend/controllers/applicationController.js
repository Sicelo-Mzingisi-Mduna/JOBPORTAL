const Application = require("../models/Application");
const Job = require("../models/Job");

//@desc Apply to a Job(job_Seeker only)
exports.applyToJob  = async(req, res) => {
  try{
    if(req.user.role == "job_seeker"){
      const existing_application_record = await Application.findOne({
      job: req.params.jobId,
      applicant: req.user.id
    });

    if(existing_application_record){
      res.status(400).json({
        message: "Errror! Application Already exists"
      })
    }else{
      const application = await Application.create({
        job: req.params.jobId,
        applicant: req.user.id,
        resume: req.user.resume, //assuming resume is stored in user profile
      })

      if(application){
        res.status(201).json({
          message: "Application Created Successfuly",
          data: application
        })
      }else{
        res.status(400).json({
          message: "Creation Error! Application Couldnt be Created"
        })
      }
    };
    }else{
      res.status(403).json({
        message: "Authorization Error! Only Job_Seekers can apply for jobs"
      })
    }
  }catch(error){
    res.status(500).json({
      message: error.message
    })
  }
};

//@desc Get logged-in user's applications
exports.getMyApplications  = async(req, res) => {
  try{
    const applications = await Application.find({applicant: req.user.id}).populate(
      "job",
      "title company location type"
    ).sort({createdAt: -1});

    if(applications){
      res.status(200).json({
        message: "Records Retrieved Successfully",
        data: applications
      })
    }else{
      res.status(400).json({
        message: "Application Records retrieval Error! Couldnt retrive records"
      })
    };
  }catch(error){
    res.status(500).json({
      message: error.message
    })
  }
};

//@desc Get all applications for a job (Employer)
exports.getApplicationsForJob  = async(req, res) => {
	try{
		if(req.user.role == "employer"){
			jobs_exists = await Job.findById({_id:req.params.jobId});
			
			if(jobs_exists){
				check_ownership = await Job.findOne({_id:req.params.jobId, postedBy: req.user.id})
				
				if(check_ownership){
					applicants = await Application.find({job : req.params.jobId}).select("-resume").populate(
					  "job",
					  "title location category type"
					  ).populate(
					  "applicant",
					  "name email avatar resume"
					  );
		  
		  if(applicants){
			  res.status(200).json({
				  message: "Records retrieved Successfully",
				  data: applicants
			  })
		  }else{
			  res.status(400).json({
				  message: "Error! Records Couldnt be retrived"
			  })
		  };
				}else{
					res.status(400).json({
						message: "Record Ownership Error! The record doesnt belong to the logged in user"
					})
				}
			}else{
				res.status(400).json({
					message: "Job doesnt exist"
				})
			}
		}else{
		  res.status(301).json({
			  message: "Authorization Error! Only Employers can view these records"
		  })
	  };
	}catch(error){
    res.status(500).json({
      message: error.message
    })
  }
};

//@desc Get applications by ID (Job_seeker or employer)
exports.getApplicationsById  = async(req, res) => {
	try{
		//Check if the job exists
	    job_exists =  await Job.findById({_id : req.params.id});
		
		if(job_exists){
			if(req.user.role.toString() === "employer"){
				employer_ownership = await Job.findOne({_id : req.params.id, postedBy: req.user.id});
				
				if(employer_ownership){
					  applications = await Application.find({job : req.params.id})
					  res.status(200).json({
						  message: "Record retrived Successfully",
						  data: applications
					  })
				  }else{
					  res.status(500).json({
						  message: "Record Ownership Error! You are not the Employer whom this record belongs to "
					  })
				  };
			}else{
				if(req.user.role.toString() === "job_seeker"){
					job_seeker_ownership = await Application.findOne({job: req.params.id, applicant: req.user.id});
				
				if(job_seeker_ownership){
					  applications = await Application.find({job : req.params.id})
					  res.status(200).json({
						  message: "Record retrived Successfully",
						  data: applications
					  })
				  }else{
					  res.status(500).json({
						  message: "Record Ownership Error! You are not the Job Seeker whom this record belongs to "
					  })
				  };
				}else{
					res.status(400).json({
					message: "Authorization Error! You dont have the required role to view this record/s"
				})
				};
			};
		}else{
			res.status(400).json({
				message: "Error! Record Doesnt exist"
			})
		};
	}catch(error){
    res.status(500).json({
      message: error.message
    })
  };
};

//@desc Update application status(Employer)
exports.updateStatus  = async(req, res) => {
  try{
	if(req.user.role.toString() === "employer"){
		job_exists = await Job.findById({_id: req.params.id});
		
		if(job_exists){
			record_ownership = await Job.findOne({_id: req.params.id, postedBy: req.user.id});
			
			if(record_ownership){
				job_record = await Application.findOne({job: req.params.id});
				
				if(job_record){
					const new_status = req.body.status;
          const updated_record = await Application.findOneAndUpdate(
            { job: req.params.id },
            { status: new_status },
            { new: true } // returns the updated document
          );
					
					if(updated_record){
						res.status(200).json({
							message: "Application Records status updated Successfully",
							data: updated_record
						})
					}else{
						res.status(400).json({
							message: "Record Update Error! The Records Status couldnt be updated"
						})
					}
				}else{
					res.status(400).json({
						message: "Record Retrival Error! Record exists but could not be retrived from database"
					})
				};
			}else{
				res.status(400).json({
					message: "Record Ownership Error! You dont own this Application record, so you cant update it"
				})
			};
		}else{
			res.status(400).json({
				message: "Record Retrieval Error! The Job doesnt exist "
			})
		};
	}else{
		res.status(400).json({
			message: "Authorization Error! Only Employers can update this record"
		})
	}
  }catch(error){
    res.status(500).json({
      message: error.message
    })
  }
};