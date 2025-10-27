import React from 'react'
import  {useNavigate} from 'react-router-dom';
import '../components_styles/HeroSection_LandingPage.css'

import { Link as Link } from "@webstudio-is/sdk-components-react-router";
import { HtmlEmbed as HtmlEmbed, Box as Box } from "@webstudio-is/sdk-components-react";
const HeroSection_LandingPage = ({isAuthenticated, user}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="HeroSectionRoot">

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
id={"Hero_Section_Container_1"}
className={`w-element w-hero-section-container-1`}>
<div
id={"Text Wrapper_2"}
className={`w-element w-text-hero-section-wrapper-2`}>
<div
id={"Heading_Wrapper_9"}
className={`w-element w-heading-wrapper-9`}>
<div
id={"Heading_Text_wraper_10"}
className={`w-element w-heading-text-wraper-10`}>
<p
id={"Heading_text_11"}
className={`w-element w-heading-text-11`}>
{"Find Your "}
</p>
<p
id={"Heading_text_12"}
className={`w-element w-heading-text-12`}>
{"Dream Job 💼"}
</p>
</div>
<p
id={"Heading_text_13"}
className={`w-element w-heading-text-13`}>
{"or "}
</p>
<p
id={"Heading_text_14"}
className={`w-element w-heading-text-14`}>
{"Perfect Hire 👨‍💻"}
</p>
</div>
<div
id={"Description_Wrapper_2"}
className={`w-element`}>
<p
id={"Description_text_15"}
className={`w-element w-description-text-15`}>
{"Connecting talent and opportunity — one click at a time."}
</p>
</div>
</div>
<hr
id={"thematic_break_3"}
className={`w-element w-thematic-break-3`} />
<Box
id={"Button Group_4"}
className={`w-box w-button-group-4`}>
<Link
id={"find_jobs_16"}
href={"/find-jobs"}
onClick={(e) => {
    e.preventDefault();
    navigate("/find-jobs");
  }}
className={`w-element w-find-jobs-16`}>
<HtmlEmbed
code={"<img width=\"25\" height=\"25\" src=\"https://img.icons8.com/3d-fluency/94/search.png\" alt=\"search\"/>"}
className={`w-html-embed`} />
<h1
id={"find_jobs_text_19"}
className={`w-element w-find-jobs-text-19`}>
{"Find Jobs"}
</h1>
</Link>
<Link
id={"post_jobs_17"}
href={"/post-job"}
onClick={(e) => {
    e.preventDefault();
    isAuthenticated && user.role === "employer" ? 
    navigate("/post-job") 
    : navigate("/login");
  }}
className={`w-element w-post-jobs-17`}>
<HtmlEmbed
code={"<img width=\"25\" height=\"25\" src=\"https://img.icons8.com/fluency/48/upload-2.png\" alt=\"upload-2\"/>"}
className={`w-html-embed`} />
<h1
id={"post_jobs_text_21"}
className={`w-element w-post-jobs-text-21`}>
{"Post a Job"}
</h1>
</Link>
</Box>
<hr
id={"thematic_break_5"}
className={`w-element w-thematic-break-5`} />
<Box
id={"Metrics_6"}
className={`w-box w-metrics-6`}>
<div
id={"Active_users_22"}
className={`w-element w-active-users-22`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/group.png\" alt=\"group\"/>"}
className={`w-html-embed w-active-users-icon-25`} />
<h1
id={"Active_users_number_26"}
className={`w-element w-active-users-number-26`}>
{"2.4M+"}
</h1>
<p
id={"Active_users_text_27"}
className={`w-element w-active-users-text-27`}>
{"Active Users"}
</p>
</div>
<div
id={"Companies_23"}
className={`w-element w-companies-23`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/client-company.png\" alt=\"client-company\"/>"}
className={`w-html-embed w-companies-icon-28`} />
<h1
id={"Companies_Heading_29"}
className={`w-element w-companies-heading-29`}>
{"50K+"}
</h1>
<p
id={"Companies_paragraph_30"}
className={`w-element w-companies-paragraph-30`}>
{"Companies"}
</p>
</div>
<div
id={"Active_users_24"}
className={`w-element w-active-users-24`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/positive-dynamic.png\" alt=\"positive-dynamic\"/>"}
className={`w-html-embed w-active-users-icon-31`} />
<h1
id={"Active_users_heading_32"}
className={`w-element w-active-users-heading-32`}>
{"150K+"}
</h1>
<p
id={"Active_users_paragraph_33"}
className={`w-element w-active-users-paragraph-33`}>
{"Jobs Posted"}
</p>
</div>
</Box>
<hr
id={"thematic_break_7"}
className={`w-element w-thematic-break-7`} />
<div
id={"Text Wrapper_8"}
className={`w-element w-text-wrapper-8`}>
<div
id={"Heading_Wrapper_34"}
className={`w-element`}>
<p
id={"paragraph_35"}
className={`w-element w-paragraph-35`}>
{"Everything You Need to"}
</p>
<p
id={"paragraph_36"}
className={`w-element w-paragraph-36`}>
{"Succeed ✨"}
</p>
</div>
<div
id={"Description_Wrapper_37"}
className={`w-element`}>
<p
id={"paragraph_38"}
className={`w-element w-paragraph-38`}>
{"Whether you're looking for your next opporunity or the perfect candidate. "}
<br />
{"We have the tools and features to make it happen."}
</p>
</div>
</div>
</div>
</div>  
      </div>

    </>
  )
}

export default HeroSection_LandingPage