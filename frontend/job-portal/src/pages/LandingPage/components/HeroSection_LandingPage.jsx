import React from 'react'
import  {useNavigate} from 'react-router-dom';
import '../components_styles/HeroSection_LandingPage.css'

import { Link as Link } from "@webstudio-is/sdk-components-react-router";
import { HtmlEmbed as HtmlEmbed, Box as Box } from "@webstudio-is/sdk-components-react";
const HeroSection_LandingPage = ({isAuthenticated, user}) => {
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
id={"Hero_Section_Container"}
className={`w-element w-hero-section-container`}>
<div
id={"Text Wrapper"}
className={`w-element w-text-wrapper`}>
<div
id={"Heading_Wrapper"}
className={`w-element w-heading-wrapper`}>
<div
id={"Heading_Text_wraper"}
className={`w-element w-heading-text-wraper`}>
<p
id={"Heading_text_1"}
className={`w-element w-heading-text-1`}>
{"Find Your "}
</p>
<p
id={"Heading_text_2"}
className={`w-element w-heading-text-2`}>
{"Dream Job 💼"}
</p>
</div>
<p
id={"Heading_text_3"}
className={`w-element w-heading-text-3`}>
{"or "}
</p>
<p
id={"Heading_text_4"}
className={`w-element w-heading-text-4`}>
{"Perfect Hire 👨‍💻"}
</p>
</div>
<div
id={"Description_Wrapper"}
className={`w-element`}>
<p
id={"Description_text"}
className={`w-element w-description-text`}>
{"Connecting talent and opportunity — one click at a time."}
</p>
</div>
</div>
<hr
id={"thematic_break_1"}
className={`w-element w-thematic-break-1`} />
<Box
className={`w-box w-button-group`}>
<Link
id={"find_jobs"}
href={"/find-jobs"}
className={`w-element w-find-jobs`}>
<HtmlEmbed
code={"<img width=\"25\" height=\"25\" src=\"https://img.icons8.com/3d-fluency/94/search.png\" alt=\"search\"/>"}
className={`w-html-embed`} />
<h1
id={"find_jobs_text"}
className={`w-element w-find-jobs-text`}>
{"Find Jobs"}
</h1>
</Link>
<Link
id={"post_jobs"}
href={"/post-job"}
className={`w-element w-post-jobs`}>
<HtmlEmbed
code={"<img width=\"25\" height=\"25\" src=\"https://img.icons8.com/fluency/48/upload-2.png\" alt=\"upload-2\"/>"}
className={`w-html-embed`} />
<h1
id={"post_jobs_text"}
className={`w-element w-post-jobs-text`}>
{"Post a Job"}
</h1>
</Link>
</Box>
<hr
id={"thematic_break_2"}
className={`w-element w-thematic-break-2`} />
<Box
id={"Metrics"}
className={`w-box w-metrics`}>
<div
id={"Active_users"}
className={`w-element w-active-users`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/group.png\" alt=\"group\"/>"}
className={`w-html-embed w-active-users-icon`} />
<h1
id={"Active_users_number"}
className={`w-element w-active-users-number`}>
{"2.4M+"}
</h1>
<p
id={"Active_users_text"}
className={`w-element w-active-users-text`}>
{"Active Users"}
</p>
</div>
<div
id={"Companies"}
className={`w-element w-companies`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/client-company.png\" alt=\"client-company\"/>"}
className={`w-html-embed w-html-embed-1`} />
<h1
className={`w-element w-element-1`}>
{"50K+"}
</h1>
<p
className={`w-element w-element-2`}>
{"Companies"}
</p>
</div>
<div
className={`w-element w-active-users-1`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/positive-dynamic.png\" alt=\"positive-dynamic\"/>"}
className={`w-html-embed w-html-embed-2`} />
<h1
className={`w-element w-element-3`}>
{"150K+"}
</h1>
<p
className={`w-element w-element-4`}>
{"Jobs Posted"}
</p>
</div>
</Box>
<hr
id={"thematic_break_3"}
className={`w-element w-thematic-break-3`} />
<div
id={"Text Wrapper"}
className={`w-element w-text-wrapper-1`}>
<div
id={"Heading_Wrapper"}
className={`w-element`}>
<p
id={"Main_Heading"}
className={`w-element w-element-5`}>
{"Everything You Need to"}
</p>
<p
id={"Main_Heading"}
className={`w-element w-element-6`}>
{"Succeed ✨"}
</p>
</div>
<div
id={"Description_Wrapper"}
className={`w-element`}>
<p
className={`w-element w-element-7`}>
{"Whether you're looking for your next opporunity or the perfect candidate. "}
<br />
{"We have the tools and features to make it happen."}
</p>
</div>
</div>
</div>
</div>
    </>
  )
}

export default HeroSection_LandingPage