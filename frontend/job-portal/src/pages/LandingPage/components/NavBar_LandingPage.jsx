import React from 'react'
import '../components_styles/NavBar_LandingPage.css'
import  {useNavigate} from 'react-router-dom';


import { Link as Link } from "@webstudio-is/sdk-components-react-router";
import { HtmlEmbed as HtmlEmbed } from "@webstudio-is/sdk-components-react";

const NavBar_LandingPage = ({isAuthenticated, user}) => {
  const navigate = useNavigate();

  return (
    <>
      <div
className={`w-element-body`}>
<Link
href={"https://webstudio.is/?via=badge"}
target={"_blank"}
id={"Built by Sicelo_Link"}
className={`w-element w-built-by-sicelo-link`}>
<HtmlEmbed
code={"<img width=\"70%\" height=\"70%\" src=\"https://img.icons8.com/fluency/48/github.png\" alt=\"github\"/>"}
className={`w-html-embed w-github-icon`} />
<div
id={"Built by Sicelo_Text_Wrapper"}
className={`w-element w-built-by-sicelo-text-wrapper`}>
<span
id={"Built by Sicelo_Text"}
className={`w-element w-built-by-sicelo-text`}>
{"Sicelo Mduna"}
</span>
</div>
</Link>
<div
id={"NavBar_container"}
className={`w-element w-navbar-container`}>
<div
id={"left_wrapper"}
className={`w-element w-left-wrapper`}>
<Link
id={"NavBar_Home_Link"}
href={"/"}
onClick={(e) => {
    e.preventDefault();
    navigate("/");
  }}
className={`w-element w-nav-bar-home-link`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/hard-working.png\" alt=\"hard-working\"/>"}
className={`w-html-embed w-nav-bar-home-icon`} />
<h4
id={"NavBar_Home_Text"}
className={`w-element w-nav-bar-home-text ${"NavBar"}`}>
{"Job_Portal"}
</h4>
</Link>
</div>
<div
id={"center_wrapper"}
className={`w-element w-center-wrapper`}>
<div
className={`w-element w-left-wrapper-1`}>
<Link
id={"NavBar_FindJobs_Link"}
href={"/find-jobs"}
onClick={(e) => {
    e.preventDefault();
    navigate("/find-jobs");
  }}
className={`w-element w-nav-bar-find-jobs-link`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/find-matching-job.png\" alt=\"find-matching-job\"/>"}
className={`w-html-embed w-nav-bar-find-jobs-icon`} />
<h4
id={"NavBar_FindJobs_Text"}
className={`w-element w-nav-bar-find-jobs-text ${"NavBar"}`}>
{"Find Jobs"}
</h4>
</Link>
</div>
<div
className={`w-element w-right-wrapper`}>
<Link
id={"NavBar_Home_Link"}
href={"/employer/dashboard"}
onClick={(e) => {
    e.preventDefault();
    isAuthenticated && user.role === "employer" ? 
    navigate("/employer/dashboard") 
    : navigate("/login");
  }}
className={`w-element w-nav-bar-home-link-1`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/admin-settings-male--v1.png\" alt=\"Employers\"/>"}
className={`w-html-embed w-nav-bar-home-icon-1`} />
<h4
id={"NavBar_Home_Text"}
className={`w-element w-nav-bar-home-text-1 ${"NavBar"}`}>
{"Employers"}
</h4>
</Link>
</div>
</div>
<div
id={"right_wrapper"}
className={`w-element w-right-wrapper-1`}>
<div
className={`w-element w-left-wrapper-2`}>
<Link
id={"NavBar_Home_Link"}
href={"/login"}
onClick={(e) => {
    e.preventDefault();
    navigate("/login");
  }}
className={`w-element w-nav-bar-home-link-2`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/checked-user-male.png\" alt=\"Login\"/>"}
className={`w-html-embed w-nav-bar-home-icon-2`} />
<h4
id={"NavBar_Home_Text"}
className={`w-element w-nav-bar-home-text-2 ${"NavBar"}`}>
{"Login"}
</h4>
</Link>
</div>
<div
className={`w-element w-right-wrapper-2`}>
<Link
id={"NavBar_Home_Link"}
href={"/signup"}
onClick={(e) => {
    e.preventDefault();
    navigate("/signup");
  }}
className={`w-element w-nav-bar-home-link-3`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/signing-a-document.png\" alt=\"signing-a-document\"/>"}
className={`w-html-embed w-nav-bar-home-icon-3`} />
<h4
id={"NavBar_Home_Text"}
className={`w-element w-nav-bar-home-text-3 ${"NavBar"}`}>
{"Sign Up"}
</h4>
</Link>
</div>
</div>
</div>
</div>
    </>
    
  )
}

export default NavBar_LandingPage