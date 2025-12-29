import React, {useState} from 'react'
import { Loader2 } from 'lucide-react'
import '../Auth/components_styles/Login.css'
import '../Auth/components_styles/Loader.css'
import  {useNavigate} from 'react-router-dom';

import { Link } from "@webstudio-is/sdk-components-react-router";
import { HtmlEmbed, Input } from "@webstudio-is/sdk-components-react";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [formState, setFormState] = useState({
    loading: false,
    errors: {},
    showPassword: false,
    success: false,
  });

  // Input Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormState((prev) => ({
        ...prev,
        errors: {
          ...prev.errors,
          email: "Invalid email format",
        },
      }));
      return false;
    } else {
      setFormState((prev) => {
        const { email, ...restErrors } = prev.errors;
        return { ...prev, errors: restErrors };
      });
      return true;
    }
  };

  // ✅ Validate Password
  const validatePassword = (password) => {
    if (password.length < 6) {
      setFormState((prev) => ({
        ...prev,
        errors: {
          ...prev.errors,
          password: "Password must be at least 6 characters long",
        },
      }));
      return false;
    } else {
      setFormState((prev) => {
        const { password, ...restErrors } = prev.errors;
        return { ...prev, errors: restErrors };
      });
      return true;
    }
  };

  // ✅ Handle Input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Validate form before submit
  const validateForm = () => {
    const emailValid = validateEmail(formData.email);
    const passwordValid = validatePassword(formData.password);

    const valid = emailValid && passwordValid;
    return valid;
  };

  // ✅ Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormState((prev) => ({
      ...prev,
      loading: true,
      errors: {},
    }));

    try {
      // Example fake delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

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


  return (
    <div className="LoginRoot">

      <div
className={`w-element-body`}>
<Link
href={"https://webstudio.is/?via=badge"}
target={"_blank"}
id={"Built by Sicelo_Link"}
className={`w-element w-built-by-sicelo-link ${"Built by Sicelo"}`}>
</Link>
<div
id={"Sign_in_Body_Container"}
className={`w-element w-sign-in-body-container ${"1"}`}>
<div
id={"Sign_In_Card_Container"}
className={`w-element w-sign-in-card-container ${"2"}`}>
<div
id={"Sign_In_Card"}
className={`w-element w-sign-in-card ${"3"}`}>
<div
id={"Sign_In_Card_Heading_Wrapper"}
className={`w-element w-sign-in-card-heading-wrapper ${"4"}`}>
<h1
id={"Card_Heading"}
className={`w-element w-card-heading ${"5"}`}>
{"Welcome back 👋"}
</h1>
</div>
<div
id={"Sign_In_Card_Paragraph_Wrapper"}
className={`w-element w-sign-in-card-paragraph-wrapper ${"6"}`}>
<p
id={"Sign_In_Card_Paragraph_text"}
className={`w-element w-sign-in-card-paragraph-text ${"7"}`}>
{"Please Enter your credentials to sign into your account"}
</p>
</div>
<div
id={"Sign_In_From_Wrapper"}
className={`w-element w-sign-in-from-wrapper ${"8"}`}>
<form
id={"Sign_In_Form"}
onSubmit = {handleSubmit}
method="POST"
className={`w-element w-sign-in-form ${"9"}`}>
<div
id={"Sign_In_Email_Address"}
className={`w-element w-sign-in-email-address ${"10"}`}>
<div
id={"Sign_In_Email_Label_Container"}
className={`w-element w-sign-in-email-label-container ${"11"}`}>
<div
id={"Email_Icon_Container"}
className={`w-element ${"11"}`}>
<HtmlEmbed
code={"<img width=\"100%\" height=\"100%\" src=\"https://img.icons8.com/fluency/48/email-open.png\" alt=\"email-open\"/>"}
className={`w-html-embed w-email-label-icon`} />
</div>
<div
id={"Email_Label_Text_Container"}
className={`w-element ${"12"}`}>
<label
id={"Email_Label_Text"}
htmlFor={"email"}
className={`w-element w-email-label-text ${"13"}`}>
{"Email Address :"}
</label>
</div>
<div
id={"Email_Importance_Icon_Container"}
className={`w-element ${"14"}`}>
<HtmlEmbed
code={"<img width=\"100%\" height=\"100%\" src=\"https://img.icons8.com/fluency/48/high-importance.png\" alt=\"high-importance\"/>"}
executeScriptOnCanvas={false}
className={`w-html-embed w-high-importance-icon`} />
</div>
</div>
<div
id={"Sign_In_Email_Input_Field_Container"}
className={`w-element w-sign-in-email-input-field-container ${"15"}`}>
<Input
placeholder={"email@example.com"}
required={true}
type={"email"}
id={"Sign_In_Email_Input_Filed"}
name={"email"}
value={formData.email}
onChange = {handleInputChange}
className={`w-element w-sign-in-email-input-filed ${"16"}`} />
{formState.errors.email && (
  <p className="error-text">{formState.errors.email}</p>
)}
</div>
</div>
<div
id={"Sign_In_Password"}
className={`w-element w-sign-in-password ${"17"}`}>
<div
id={"Sign_In_Password_Label_Container"}
className={`w-element w-sign-in-password-label-container ${"18"}`}>
<div
id={"Password_Icon_Container"}
className={`w-element ${"19"}`}>
<HtmlEmbed
code={"<img width=\"100%\" height=\"100%\" src=\"https://img.icons8.com/fluency/48/lock.png\" alt=\"lock\"/>"}
className={`w-html-embed w-password-label-icon`} />
</div>
<div
id={"Password_Label_Text_Container"}
className={`w-element ${"20"}`}>
<label
id={"Password_Label_Text"}
htmlFor={"password"}
className={`w-element w-password-label-text ${"21"}`}>
{"Password :"}
</label>
</div>
<div
id={"Password_Importance_Icon_Container"}
className={`w-element ${"22"}`}>
<HtmlEmbed
code={"<img width=\"100%\" height=\"100%\" src=\"https://img.icons8.com/fluency/48/high-importance.png\" alt=\"high-importance\"/>"}
className={`w-html-embed w-high-importance-icon-1`} />
</div>
</div>
<div
id={"Sign_In_Password_Icon_Input_Field_Container"}
className={`w-element w-sign-in-password-icon-input-field-container ${"23"}`}>
<Input
placeholder={"***********"}
required={true}
type={formState.showPassword ? "text" : "password"}
onChange = {handleInputChange}
value = {formData.password}
id={"Sign_In_Password_Input_Filed"}
name={"password"}
className={`w-element w-sign-in-password-input-filed ${"24"}`} />
<button
type={"button"}
id={"password_eye_button"}
onClick={() =>
                          setFormState((prev) => ({
                            ...prev,
                            showPassword: !prev.showPassword,
                          }))
                        }
className={`w-element w-password-eye-button ${"25"}`}>
{formState.showPassword ?
  <div
id={"password_off_container"}
className={`w-element ${"26"}`}>
<HtmlEmbed
code={"<img width=\"25\" height=\"25\" src=\"https://img.icons8.com/fluency/48/invisible.png\" alt=\"invisible\"/>"}
className={`w-html-embed`} />
</div>
  : <div
id={"password_on_container"}
className={`w-element ${"27"}`}>
<HtmlEmbed
code={"<img width=\"25\" height=\"25\" src=\"https://img.icons8.com/fluency/48/visible.png\" alt=\"visible\"/>"}
className={`w-html-embed`} />
</div>
}
</button>
</div>
{formState.errors.password && (
                      <p className="error-text">{formState.errors.password}</p>
                    )}
</div>
<div
id={"Sign_In_Button_Wrapper"}
className={`w-element w-sign-in-button-wrapper ${"28"}`}>
<button
type={"submit"}
id={"Sign_In_Button"}
disabled = {formState.loading}
className={`w-element w-sign-in-button ${"29"}`}>
{formState.loading ? (
  <>
    <Loader2 className="loader-icon" />
    <span>Signing In....</span>
  </>
) : (<span>{"Sign In"}</span>)}
</button>
</div>
<div
id={"Sign_In_Button_Wrapper"}
className={`w-element w-sign-in-button-wrapper-1 ${"30"}`}>
<p
id={"No_Account_Text"}
className={`w-element w-no-account-text ${"30"}`}>
{"Don't have an account?"}
</p>
<Link
id={"Sign_Up_Link"}
href={"/signup"}
onClick={(e) => {
    e.preventDefault();
    navigate("/signup");
  }}
className={`w-element w-sign-up-link ${"31"}`}>
{"Create Account"}
</Link>
</div>
</form>
</div>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default Login