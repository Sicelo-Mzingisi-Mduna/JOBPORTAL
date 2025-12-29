import React, {useState} from 'react'
import { Loader2 } from 'lucide-react'
import '../Auth/components_styles/SignUp.css'
import '../Auth/components_styles/Loader.css'
import  {useNavigate} from 'react-router-dom';

import { Link as Link } from "@webstudio-is/sdk-components-react-router";
import { HtmlEmbed as HtmlEmbed, Input as Input, Image as Image } from "@webstudio-is/sdk-components-react";
import { Tabs as Tabs, TabsList as TabsList, TabsTrigger as TabsTrigger, TabsContent as TabsContent } from "@webstudio-is/sdk-components-react-radix";



const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      fullname: "",
      email: "",
      password: "",
      role: "",
    });

  const [image, setImage] = useState(null);

  const [formState, setFormState] = useState({
      loading: false,
      errors: {},
      previewImage: false,
      showPassword: false,
      success: false,
    });

  

  const handlePasswordDisplay =  (new_showPassword) => {
    setFormState((prev) => ({
      ...prev,
      showPassword: new_showPassword,
    }))
  }


  
  const handleFullnameChange = (e) =>{
    const  fullname = e.target.value
    setFormData((prev) => ({
      ...prev,
      fullname: fullname,
    }))

  };

  const handleEmailChange = (e) =>{
    const  email = e.target.value
    setFormData((prev) => ({
      ...prev,
      email: email,
    }))

  };


  const handlePasswordChange = (e) =>{
    const  password = e.target.value
    setFormData((prev) => ({
      ...prev,
      password: password,
    }))
  };


  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // creates preview URL
      setFormState((prev) => ({
        ...prev,
        previewImage: true,
      }))
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormState((prev) => ({
      ...prev,
      loading: true,
      errors: {},
    }));

    try {
      // Example fake delay
      await new Promise((resolve) => setTimeout(resolve, 1600));

      setFormState((prev) => ({
        ...prev,
        loading: false,
        success: true,
      }));

      alert("Login successful!");
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        loading: false,
        errors: {
          submit: error.response?.data?.message || "Login failed. Please try again.",
        },
      }));
    }
  };

  const handleRoleChange = (role) => {

    setFormData((prev) => ({
      ...prev,
      role: role,
    }))

  }





  return (
    <div className="SignUpRoot">
      <div
className={`w-element-body`}>
<Link
href={"https://webstudio.is/?via=badge"}
target={"_blank"}
id={"Built by Sicelo_Link"}
className={`w-element w-built-by-sicelo-link ${"Built by Sicelo"}`}>
</Link>
<div
id={"Sign_up_Body_Container"}
className={`w-element w-sign-up-body-container`}>
<div
id={"Sign_up_Card_Container"}
className={`w-element w-sign-up-card-container`}>
<div
id={"Sign_up_Card"}
className={`w-element w-sign-up-card`}>
<div
id={"Sign_up_Card_Heading_Wrapper"}
className={`w-element`}>
<h1
id={"Sign_up_Card_Heading"}
className={`w-element w-sign-up-card-heading`}>
{"Create Account"}
</h1>
</div>
<div
id={"Sign_up_Card_Paragraph_Wrapper"}
className={`w-element`}>
<p
id={"Sign_up_Card_Paragraph"}
className={`w-element w-sign-up-card-paragraph`}>
{"Join thousands of professionals finding their dream jobs."}
</p>
</div>
<div
id={"Sign_up_Form_Wrapper"}
className={`w-element w-sign-up-form-wrapper`}>
<form
id={"Sign_up_Form"}
method={"post"}
onSubmit={handleFormSubmit}
autoFocus={true}
className={`w-element w-sign-up-form`}>
<div
id={"Sign_up_Full_Name"}
className={`w-element w-sign-up-full-name`}>
<div
id={"Sign_up_Full_Name_label_wrapper"}
className={`w-element w-sign-up-full-name-label-wrapper`}>
<div
id={"Fullname_Label_Icon_Container"}
className={`w-element`}>
<HtmlEmbed
code={"<img width=\"25\" height=\"25\" src=\"https://img.icons8.com/fluency/48/guest-male--v1.png\" alt=\"guest-male--v1\"/>"}
className={`w-html-embed w-fullname-label-icon`} />
</div>
<div
id={"Fullname_Label_Text_Container"}
className={`w-element w-fullname-label-text-container`}>
<label
id={"Fullname_Label_Text"}
htmlFor={"fullname"}
className={`w-element w-fullname-label-text`}>
{"Full Name:"}
</label>
<label
id={"Fullname_Label_Text"}
htmlFor={"fullname"}
className={`w-element w-high-importance-icon`}>
{"*"}
</label>
</div>
</div>
<div
id={"Sign_up_Full_Name_Input_field_wrapper"}
className={`w-element w-sign-up-full-name-input-field-wrapper`}>
<Input
placeholder={"John Doe"}
required={true}
id={"Sign_up_Fullname_Input_Filed"}
name={"fullname"}
value={formData.fullname}
onChange = {handleFullnameChange}
autoFocus={true}
className={`w-element w-sign-up-fullname-input-field`} />
</div>
</div>
<hr
id={"linebreak_1"}
className={`w-element w-linebreak-1`} />
<div
id={"Sign_up_Email_Address"}
className={`w-element w-sign-up-email-address`}>
<div
id={"Sign_up_Email_label_wrapper"}
className={`w-element w-sign-up-email-label-wrapper`}>
<div
id={"Email_Label_Icon_Container"}
className={`w-element`}>
<HtmlEmbed
code={"<img width=\"25\" height=\"25\" src=\"https://img.icons8.com/fluency/48/email-open.png\" alt=\"email-open\"/>"}
className={`w-html-embed w-email-label-icon`} />
</div>
<div
id={"Email_Label_Text_Container"}
className={`w-element w-email-label-text-container`}>
<label
id={"Email_Label_Text"}
htmlFor={"email"}
className={`w-element w-email-label-text`}>
{"Email Address:"}
</label>
<label
id={"Fullname_Label_Text"}
htmlFor={"fullname"}
className={`w-element w-high-importance-icon-1`}>
{"*"}
</label>
</div>
</div>
<div
id={"Sign_up_Email_Input_field_wrapper"}
className={`w-element w-sign-up-email-input-field-wrapper`}>
<Input
placeholder={"johndoe@email.com"}
required={true}
id={"Sign_up_email_Input_Field"}
name={"email"}
value={formData.email}
onChange={handleEmailChange}
type={"email"}
className={`w-element w-sign-up-email-input-field`} />
</div>
</div>
<hr
id={"linebreak_2"}
className={`w-element w-linebreak-2`} />
<div
id={"Sign_up_Password"}
className={`w-element w-sign-up-password`}>
<div
id={"Sign_up_Password_label_wrapper"}
className={`w-element w-sign-up-password-label-wrapper`}>
<div
id={"Password_Label_Icon_Container"}
className={`w-element`}>
<HtmlEmbed
code={"<img width=\"25\" height=\"25\" src=\"https://img.icons8.com/fluency/48/lock.png\" alt=\"lock\"/>"}
className={`w-html-embed w-password-label-icon`} />
</div>
<div
id={"Password_Label_Text_Container"}
className={`w-element w-password-label-text-container`}>
<label
id={"Password_Label_Text"}
htmlFor={"password"}
className={`w-element w-password-label-text`}>
{"Password:"}
</label>
<label
id={"Fullname_Label_Text"}
htmlFor={"fullname"}
className={`w-element w-high-importance-icon-2`}>
{"*"}
</label>
</div>
</div>
<div
id={"Sign_up_Password_Input_field_wrapper"}
className={`w-element w-sign-up-password-input-field-wrapper`}>
<Input
placeholder={"**************"}
required={true}
id={"Sign_up_Password_Input_Field"}
name={"password"}
value={formData.password}
onChange={handlePasswordChange}
type={formState.showPassword === true ? "text" : "password"}
className={`w-element w-sign-up-password-input-field`} />
<button
type={"button"}
id={"password_eye_button"}
onClick = {() =>{handlePasswordDisplay(!formState.showPassword)}}
className={`w-element w-password-eye-button ${"25"}`}>
{
  formState.showPassword === false ? <div
id={"password_off_container"}
className={`w-element`}>
<HtmlEmbed
code={"<img width=\"25\" height=\"25\" src=\"https://img.icons8.com/fluency/48/invisible.png\" alt=\"invisible\"/>"}
className={`w-html-embed`} />
</div> :  <div
id={"password_on_container"}
className={`w-element`}>
<HtmlEmbed
code={"<img width=\"25\" height=\"25\" src=\"https://img.icons8.com/fluency/48/visible.png\" alt=\"visible\"/>"}
className={`w-html-embed`} />
</div>
  
}
</button>
</div>
</div>
<hr
id={"linebreak_3"}
className={`w-element w-linebreak-3`} />
<div
id={"Sign_up_Profile_picture"}
className={`w-element w-sign-up-profile-picture`}>
<div
id={"Sign_up_Profile_picture_label_wrapper"}
className={`w-element w-sign-up-profile-picture-label-wrapper`}>
<div
id={"Sign_up_Profile_picture_Icon_Container"}
className={`w-element`}>
<HtmlEmbed
code={"<img width=\"25\" height=\"25\" src=\"https://img.icons8.com/fluency/48/camera.png\" alt=\"camera\"/>"}
className={`w-html-embed w-profile-picture-label-icon`} />
</div>
<div
id={"Sign_up_Profile_picture_Text_Container"}
className={`w-element w-sign-up-profile-picture-text-container`}>
<label
id={"Profile_picture_Label_Text"}
htmlFor={"profile_picture"}
className={`w-element w-profile-picture-label-text`}>
{"Profile Picture (Optional)"}
</label>
</div>
</div>
<div
id={"Sign_up_Password_Input_field_wrapper"}
className={`w-element w-sign-up-profile-picture-input-field-wrapper`}>
<div
id={"Sign_up_Profile_picture_icon_wrapper"}
className={`w-element`}>
<Image
loading={"lazy"}
alt={"Uploaded preview"}
id={"Sign_up_Profile_picture"}
src={formState.previewImage === true  ?  (image) :  ("https://img.icons8.com/fluency/48/user-male-circle--v1.png")}
className={`w-image w-sign-up-profile-picture-1`} />
</div>
<Input
id={"Sign_up_Profile_picture_Input_Filed"}
name={"profile_picture"}
value={""}
onChange={handleImageUpload}
type={"file"}
accept={"image/*"}
placeholder={""}
className={`w-element w-sign-up-profile-picture-input-filed`} />
</div>
</div>
<hr
id={"linebreak_4"}
className={`w-element w-linebreak-4`} />
<div
id={"Sign_up_User_role"}
className={`w-element w-sign-up-user-role`}>
<div
id={"User_role_label_wrapper"}
className={`w-element w-user-role-label-wrapper`}>
<div
id={"User_role_Label_Icon_Container"}
className={`w-element`}>
<HtmlEmbed
code={"<img width=\"25\" height=\"25\" src=\"https://img.icons8.com/fluency/48/decision.png\" alt=\"decision\"/>"}
className={`w-html-embed w-user-role-label-icon`} />
</div>
<div
id={"User_role_Label_Text_Container"}
className={`w-element w-user-role-label-text-container`}>
<label
id={"User_role_Label_Text"}
htmlFor={"email"}
className={`w-element w-user-role-label-text`}>
{"User role:"}
</label>
<label
id={"Fullname_Label_Text"}
htmlFor={"fullname"}
className={`w-element w-high-importance-icon-3`}>
{"*"}
</label>
</div>
</div>
<Tabs
value={"0"}
className={`w-tabs w-tabs-1`}>
<TabsList
className={`w-tabs-list w-tabs-list-1`}>
<TabsTrigger
data-ws-index="0"
className={`w-tab-trigger w-tab-trigger-1`}>
<div
id={"JobSeeker_Tab_card"}
className={`w-element w-job-seeker-tab-card`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/find-matching-job.png\" alt=\"find-matching-job\"/>"}
className={`w-html-embed`} />
<h3
id={"Job_seeker_heading"}
className={`w-element w-job-seeker-heading`}>
{"Job Seeker"}
</h3>
</div>
</TabsTrigger>
<TabsTrigger
data-ws-index="1"
className={`w-tab-trigger w-tab-trigger-2`}>
<div
id={"Employer_Tab_card"}
className={`w-element w-employer-tab-card`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/admin-settings-male--v1.png\" alt=\"Employers\"/>"}
className={`w-html-embed`} />
<h3
id={"Employer_heading"}
className={`w-element w-employer-heading`}>
{"Employer"}
</h3>
</div>
</TabsTrigger>
</TabsList>
<TabsContent
data-ws-index="0"
className={`w-tab-content w-tab-content-1`}>
<div
id={"JobSeeker_TabContent_wrapper"}
className={`w-element w-job-seeker-tab-content-wrapper`}>
<div
id={"JobSeeker_Screen"}
className={`w-element w-job-seeker-screen`}>
<p
id={"JobSeeker_Screentext"}
className={`w-element w-job-seeker-screentext`}>
{"Start your career journey with opportunities tailored just for you. "}
<br />
{"Create your profile, showcase your skills, and connect with employers who are ready to hire."}
</p>
<div
id={"Create_JobSeekerAccount_buttonwrapper"}
className={`w-element w-create-job-seeker-account-buttonwrapper`}>
<button
type={"submit"}
id={"Create_JobSeekerAccount_button"}
role={"job_seeker"}
disabled = {formState.loading}
onClick = {() => handleRoleChange("job_seeker")}
className={`w-element w-create-job-seeker-account-button`}>
{formState.loading === true ? (
  <>
    <Loader2 className="loader-icon" />
    <span>Creating Account</span>
  </>
) : (<span>{"Create Job Seeker Account"}</span>)}
</button>
</div>
</div>
</div>
</TabsContent>
<TabsContent
data-ws-index="1"
className={`w-tab-content w-tab-content-2`}>
<div
id={"Employer_TabContent_wrapper"}
className={`w-element w-employer-tab-content-wrapper`}>
<div
id={"Employer_Screen"}
className={`w-element w-employer-screen`}>
<p
id={"Employer_Screentext"}
className={`w-element w-employer-screentext`}>
{"Find the right talent faster. Post jobs, manage applications, and connect with skilled candidates who are ready to make an impact."}
</p>
<div
id={"Create_EmployerAccount_buttonwrapper"}
className={`w-element w-create-employer-account-buttonwrapper`}>
<button
type={"submit"}
id={"Create_EmployerAccount_button"}
role={"employer"}
disabled = {formState.loading}
onClick = {() => handleRoleChange("employer")}
className={`w-element w-create-employer-account-button`}>
{formState.loading === true ? (
  <>
    <Loader2 className="loader-icon" />
    <span>Creating Account</span>
  </>
) : (<span>{"Create Employer Account"}</span>)}
</button>
</div>
</div>
</div>
</TabsContent>
</Tabs>
<div
id={"Log_In_Button_Wrapper"}
className={`w-element w-log-in-button-wrapper`}>
<p
id={"No_Account_Text"}
className={`w-element w-no-account-text`}>
{"Already have an account?"}
</p>
<Link
id={"Sign_Up_Link"}
href={"/login"}
onClick={(e) => {
    e.preventDefault();
    navigate("/login");
  }}
className={`w-element w-log-in-link`}>
{"Login"}
</Link>
</div>
</div>
<hr
id={"linebreak_4"}
className={`w-element w-linebreak-4-1`} />
</form>
</div>
</div>
</div>
</div>
</div>
    </div>
  );
};

export default SignUp