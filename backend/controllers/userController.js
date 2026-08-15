const fs = require("fs").promises;
const path = require("path");
const User = require("../models/User");

//@desc Update user profile(name, avatar, company details)
exports.updateProfile = async (req, res) =>{
  try{
    const {name, avatar, companyName, companyDescription, companyLogo, resume} = req.body;
    const user = await User.findById(req.user.id);
    if(!user){
      return res.status(404).json({
        message: 'User not found'
      })
    };

    
    
    user.name = name || user.name;
    user.avatar = avatar || user.avatar;
    user.resume = resume || user.resume

    //if employer, allow updating company info
    if(user.role === 'employer'){
      user.companyName = companyName || user.companyName;
      user.companyDescription = companyDescription || user.companyDescription;
      user.companyLogo = companyLogo || user.companyLogo;
    }

    await user.save();
    res.json({
      message: 'Profile updated successfully',
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        role: user.role,
        companyName: user.companyName || "",
        companyDescription: user.companyDescription || "",
        companyLogo: user.companyLogo || "",
        resume: user.resume || "",
      }
    });


  } catch(error){
    res.status(500).json({
      message: error.message
    })
  }
};

// @desc Delete user  resume file (jobseeker only)

exports.deleteResume = async (req, res) =>{
  try{
    const {resumeUrl} = req.body; //expect resumeUrl to be the URL of the resume

    if (!resumeUrl) {
      return res.status(400).json({ message: "resumeUrl is required" });
    }
	//Extract file name of the URL
    const filename = resumeUrl.split('/').pop();

    const user = await User.findById(req.user.id);
    if(!user){
      return res.status(404).json({
        message: 'User not found'
      })
    };

    if(user.role !== 'job_seeker'){
      return res.status(403).json({
        message: 'Only jobseekers can delete resumes'
      })
    };

    // Assuming userController.js is inside /controllers, uploads folder is at project root
    const uploadsDir = path.join(__dirname, '..', 'uploads');
    const filePath = path.join(uploadsDir, filename);

    // Check if file exists and delete it
    try {
      await fs.access(filePath); // check existence
      await fs.unlink(filePath); // delete
    } catch (err) {
      // If file doesn't exist, just log – no need to error out, maybe already deleted manually
      console.log("File not found on disk, continuing:", filePath);
    }

    //Set the users resume to an empty string
    user.resume = "";
    await user.save();

    res.json({
      message: "Resume deleted successfully"
    })

  } catch(error){
    res.status(500).json({
      message: error.message
    });
  }
};

// @desc Get public profile (for employers to view jobseeker profiles)
exports.getPublicProfile = async (req, res) =>{
  try{
    const user = await User.findById(req.params.id).select("-password"); //exclude sensitive info

    if(!user){
      return res.status(404).json({
        message: 'User not found'
      })
    }

    res.json(user);

  } catch(error){
    res.status(500).json({
      message: error.message
    })
  }
};
