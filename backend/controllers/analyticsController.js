const Analytics = require("../models/Analytics");
const Application = require("../models/Application");
const Job = require("../models/Job");

const getTrend = (current, previous) => {
  if(previous === 0){
    return (
      current > 0 ? 100 : 0
    );
  }else{
    return (
      ((current - previous) / previous) * 100
    );
  }
};
//@desc Get Employer analytics(employers only)
exports.getEmployerAnalytics  = async(req, res) => {
  try{
	//check authorization
	
	if(req.user.role.toString() === "employer"){
		
		const now = new Date();
		const last7Days = new Date(now);
		last7Days.setDate(now.getDate() - 7);
		const prev7Days = new Date(now);
		prev7Days.setDate(now.getDate() - 14);
		
		//COUNTS
		const employer_id = req.user._id;
		
		//Count the total number of open(active) Jobs that were posted by the logged in employer
		const totalActiveJobs = await Job.countDocuments({postedBy: employer_id, isClosed: false});
		
		//return all the Job ID's of the jobs that were posted by an employer(all the jobs posted by a logged in employer)
		const jobs = await Job.find({postedBy: employer_id}).select("_id").lean();
		
		//Map my ID's into a new List
		let jobIds = [];
		jobIds = jobs.map(job => job._id);
		
		//Count total number of job seekers who applied for the jobs(all the jobs posted by a logged in employer) that were posted by an employer
		const totalApplications = await Application.countDocuments({job: {$in: jobIds}});
		
		//Count total number of jobseekers who applied for a job(all the jobs posted by a logged in employer), and got hired 
		const totalHired = await Application.countDocuments({
			job: {$in: jobIds},
			status: "Accepted",
		});
		
		//TRENDS
		
		//Active Job Posts Trend

    //Count the total number of jobs that were posted by the logged in employer in the last 7 days, from the current date(this data auto updates to the current date)
		const activeJobsLast7 = await Job.countDocuments({
			postedBy: employer_id,
			createdAt: {$gte: last7Days, $lte: now},
		});
		
		//Count the total number of jobs that were posted by the logged in employer in the last 14 days, from the current date(this data auto updates to the current date)
    const activeJobsPrev7 = await Job.countDocuments({
			postedBy: employer_id,
			createdAt: {$gte: prev7Days, $lte: last7Days},
		});
		
		const activeJobTrend = getTrend(activeJobsLast7, activeJobsPrev7);
		
		//Applications Trend

    //Count the total number of jobs that job seekers applied for  that were posted by the logged in employer in the last 7 days, from the current date(this data auto updates to the current date)
		const applicationsLast7 = await Application.countDocuments({
			job: {$in: jobIds},
			createdAt: {$gte: last7Days, $lte: now},
		});
		
    //Count the total number of jobs that job seekers applied for  that were posted by the logged in employer in the last 14 days, from the current date(this data auto updates to the current date)
		const applicationsPrev7 = await Application.countDocuments({
			job: {$in: jobIds},
			createdAt: {$gte: prev7Days, $lte: last7Days},
		});
		
		const applicationsTrend = getTrend(applicationsLast7, applicationsPrev7);
		
		//Hired Applicants Trends

    //Count the total number of jobs that job seekers applied for and were successfully hired  that were posted by the logged in employer in the last 7 days, from the current date(this data auto updates to the current date)
		const hiredLast7 = await Application.countDocuments({
			job: {$in: jobIds},
			status: "Accepted",
			createdAt: {$gte: last7Days, $lte: now},
		});
		
		//Count the total number of jobs that job seekers applied for and were successfully hired  that were posted by the logged in employer in the last 14 days, from the current date(this data auto updates to the current date)
    const hiredPrev7 = await Application.countDocuments({
			job: {$in: jobIds},
			status: "Accepted",
			createdAt: {$gte: prev7Days, $lte: last7Days},
		});
		
		const hiredTrend = getTrend(hiredLast7, hiredPrev7);
		
		
		//Data
    //I want to find the top 5 most recent jobs that were posted by an employer whose logged in
		const recentJobs = await Job.find({postedBy: employer_id})
			.sort({createdAt: -1})
			.limit(5)
			.select("title location type createdAt isClosed");
		
    //I want to find the top 5 most recent jobs that job seekers Applied for that were posted by an employer whose logged in
		const recentApplications = await Application.find({job: {$in: jobIds}})
			.sort({createdAt: -1})
			.limit(5)
			.populate(
			"applicant",
			"name email avatar"
			)
			.populate(
			"job",
			"title"
			);
		
		res.json({
			counts: {
				totalActiveJobs,
				totalApplications,
				totalHired,
				trends: {
					activeJobs: activeJobTrend,
					totalApplicants: applicationsTrend,
					totalHired: hiredTrend
				}
			},
			data: {
				recentJobs,
				recentApplications
				
			},
		});
		
		
	}else{
		res.status(403).json({
			message: "Authorization Error! Only employers can view these Anlytics"
		})
	};
  }catch(error){
    res.status(500).json({
      message: error.message
    })
  }
};