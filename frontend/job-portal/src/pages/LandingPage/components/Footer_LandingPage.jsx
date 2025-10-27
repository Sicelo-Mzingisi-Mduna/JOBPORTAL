import React from 'react'

import '../components_styles/Footer_LandingPage.css'

import { Link as Link } from "@webstudio-is/sdk-components-react-router";
import { HtmlEmbed as HtmlEmbed, Box as Box } from "@webstudio-is/sdk-components-react";

const Footer_LandingPage = () => {
  return (
    <>
      <div className="FooterRoot">
        <div
className={`w-element-body`}>
<Link
href={"https://webstudio.is/?via=badge"}
target={"_blank"}
id={"Built by Sicelo_Link"}
className={`w-element w-built-by-sicelo-link`}>
</Link>
<div
id={"footer_1"}
className={`w-element`}>
<div
id={"Text Wrapper_2"}
className={`w-element w-text-wrapper-2`}>
<div
id={"Heading_Wrapper_3"}
className={`w-element w-heading-wrapper-3`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/hard-working.png\" alt=\"hard-working\"/>"}
className={`w-html-embed w-nav-bar-home-icon-4`} />
<p
id={"paragraph_5"}
className={`w-element w-paragraph-5`}>
{"Job_Portal"}
</p>
</div>
<div
id={"Description_Wrapper_6"}
className={`w-element`}>
<p
id={"paragraph_7"}
className={`w-element w-paragraph-7`}>
{"Connecting talented professionals  with innovative companies  worldwide."}
<br />
{"Your career success is our mission."}
</p>
<p
id={"paragraph_8"}
className={`w-element w-paragraph-8`}>
{"© 2025 Sicelo Mduna"}
</p>
</div>
</div>
</div>
<hr
id={"linebreak_9"}
className={`w-element w-linebreak-9`} />
</div>  

      </div>

    </>
  )
}

export default Footer_LandingPage