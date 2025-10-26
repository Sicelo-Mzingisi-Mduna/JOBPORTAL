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
className={`w-element c1bvpeq0`}>
<div
id={"NavBar_container"}
className={`w-element c1vrgwod c341gyy c1go5bsf cvnwuxi c1gg3wjy ci2bnlx cwenbi cdys1e0 c1w3gxbd c1t3lyxt c17759tw c1bvpeq0 cs7ynik c1vyxfk7`}>
<div
id={"left_wrapper"}
className={`w-element cwpgwm5 cql3xvv c188xk27 c160ruuu c5ip2l4 ci2bnlx c7j86bm cvexot5 cj1w5zi c1qhjyr7 c1j245bt cdt1gbr c1wtt84r c19zirrs c1mep0jb`}>
<Link
id={"NavBar_Home_Link"}
href={"/"}
onClick={(e) => {
    e.preventDefault();
    navigate("/");
  }}
className={`w-element ci2bnlx c12lgn0z c1qpctlt c1wtnvb5 c1yndkkb cndsfpz cusdrxj c1yauu33 cwpgwm5 cql3xvv c188xk27 c160ruuu cuedhvn c1wgf0qk c1y1v70x cq7xldq c97fbb calaffw c1vyxfk7 cvexot5 cj1w5zi c1qhjyr7 c1j245bt cdt1gbr c1wtt84r c1mep0jb`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/hard-working.png\" alt=\"hard-working\"/>"}
className={`w-html-embed ci2bnlx c1w3gxbd c1x2nfm5`} />
<h4
id={"NavBar_Home_Text"}
className={`w-element cimknqo c13578e8 c1hqrv9o ci2bnlx c1w3gxbd c1x2nfm5 cesi9tq c1wtnvb5 c1nfjjn c1jsrtpy cknz3dx c117o8jf c1b0cgjp c19ty1vk c3z6kwy c1plj1kd cq7y6wq crw2tac ${"NavBar"}`}>
{"Job_Portal"}
</h4>
</Link>
</div>
<div
id={"center_wrapper"}
className={`w-element ci2bnlx c12lgn0z c1qpctlt c1w3gxbd c1x2nfm5 c1c3e7p9`}>
<div
className={`w-element cwpgwm5 cql3xvv c188xk27 c160ruuu c5ip2l4 c1bqqmhx c19zirrs cvexot5 cj1w5zi c1qhjyr7 c1j245bt cdt1gbr c1wtt84r c1mep0jb`}>
<Link
id={"NavBar_FindJobs_Link"}
href={"/find-jobs"}
onClick={(e) => {
    e.preventDefault();
    navigate("/find-jobs");
  }}
className={`w-element ci2bnlx c12lgn0z c1qpctlt c1wtnvb5 c1yndkkb cndsfpz cusdrxj c1yauu33 cuedhvn c1wgf0qk c1y1v70x cq7xldq cwpgwm5 cql3xvv c188xk27 c160ruuu c97fbb calaffw c1vyxfk7 cvexot5 cj1w5zi c1qhjyr7 c1j245bt cdt1gbr c1wtt84r c1mep0jb`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/find-matching-job.png\" alt=\"find-matching-job\"/>"}
className={`w-html-embed ci2bnlx c1w3gxbd c1x2nfm5`} />
<h4
id={"NavBar_FindJobs_Text"}
className={`w-element cimknqo c13578e8 c1hqrv9o ci2bnlx c1w3gxbd c1x2nfm5 cesi9tq c1wtnvb5 c1nfjjn c1jsrtpy c19ty1vk cq7y6wq crw2tac ${"NavBar"}`}>
{"Find Jobs"}
</h4>
</Link>
</div>
<div
className={`w-element cwpgwm5 cql3xvv c188xk27 c160ruuu c5ip2l4 ci2bnlx c1w3gxbd c1x2nfm5 c1bqqmhx c19zirrs cvexot5 cj1w5zi c1qhjyr7 c1j245bt cdt1gbr c1wtt84r c1mep0jb`}>
<Link
id={"NavBar_Home_Link"}
href={"/employer/dashboard"}
onClick={(e) => {
    e.preventDefault();
    isAuthenticated && user.role === "employer" ? 
    navigate("/employer/dashboard") 
    : navigate("/login");
  }}
className={`w-element ci2bnlx c12lgn0z c1qpctlt c1wtnvb5 c1yndkkb cndsfpz cusdrxj c1yauu33 cuedhvn c1wgf0qk c1y1v70x cq7xldq cwpgwm5 cql3xvv c188xk27 c160ruuu c97fbb calaffw c1vyxfk7 cvexot5 cj1w5zi c1qhjyr7 c1j245bt cdt1gbr c1wtt84r c1mep0jb`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/admin-settings-male--v1.png\" alt=\"Employers\"/>"}
className={`w-html-embed ci2bnlx c1w3gxbd c1x2nfm5`} />
<h4
id={"NavBar_Home_Text"}
className={`w-element cimknqo c13578e8 c1hqrv9o ci2bnlx c1w3gxbd c1x2nfm5 cesi9tq c1wtnvb5 c1nfjjn c1jsrtpy c19ty1vk cq7y6wq crw2tac ${"NavBar"}`}>
{"Employers"}
</h4>
</Link>
</div>
</div>
<div
id={"right_wrapper"}
className={`w-element ci2bnlx c12lgn0z c1qpctlt`}>
<div
className={`w-element cwpgwm5 cql3xvv c188xk27 c160ruuu c5ip2l4 c1bqqmhx c19zirrs cvexot5 cj1w5zi c1qhjyr7 c1j245bt cdt1gbr c1wtt84r c1mep0jb`}>
<Link
id={"NavBar_Home_Link"}
href={"/login"}
onClick={(e) => {
    e.preventDefault();
    navigate("/login");
  }}
className={`w-element ci2bnlx c12lgn0z c1qpctlt c1wtnvb5 c1yndkkb cndsfpz cusdrxj c1yauu33 cuedhvn c1wgf0qk c1y1v70x cq7xldq cwpgwm5 cql3xvv c188xk27 c160ruuu calaffw c1vyxfk7 cvexot5 cj1w5zi c1qhjyr7 c1j245bt cdt1gbr c1wtt84r c1mep0jb`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/checked-user-male.png\" alt=\"Login\"/>"}
className={`w-html-embed ci2bnlx c1w3gxbd c1x2nfm5`} />
<h4
id={"NavBar_Home_Text"}
className={`w-element cimknqo c13578e8 c1hqrv9o ci2bnlx c1w3gxbd c1x2nfm5 cesi9tq c1wtnvb5 c1nfjjn c1jsrtpy c19ty1vk cq7y6wq crw2tac ${"NavBar"}`}>
{"Login"}
</h4>
</Link>
</div>
<div
className={`w-element cwpgwm5 cql3xvv c188xk27 c160ruuu c5ip2l4 c1bqqmhx c19zirrs cvexot5 cj1w5zi c1qhjyr7 c1j245bt cdt1gbr c1wtt84r c1mep0jb`}>
<Link
id={"NavBar_Home_Link"}
href={"/signup"}
onClick={(e) => {
    e.preventDefault();
    navigate("/signup");
  }}
className={`w-element ci2bnlx c12lgn0z c1qpctlt c1wtnvb5 c1yndkkb cndsfpz cusdrxj c1yauu33 cuedhvn c1wgf0qk c1y1v70x cq7xldq cwpgwm5 cql3xvv c188xk27 c160ruuu calaffw c1vyxfk7 cvexot5 cj1w5zi c1qhjyr7 c1j245bt cdt1gbr c1wtt84r c1mep0jb`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/signing-a-document.png\" alt=\"signing-a-document\"/>"}
className={`w-html-embed ci2bnlx c1w3gxbd c1x2nfm5`} />
<h4
id={"NavBar_Home_Text"}
className={`w-element cimknqo c13578e8 c1hqrv9o ci2bnlx c1w3gxbd c1x2nfm5 cesi9tq c1wtnvb5 c1nfjjn c1jsrtpy c19ty1vk cq7y6wq crw2tac ${"NavBar"}`}>
{"Sign Up"}
</h4>
</Link>
</div>
</div>
</div>
<Link
href={"https://webstudio.is/?via=badge"}
target={"_blank"}
id={"Built by Sicelo_Link"}
className={`w-element cc42tz1 c1fqs2kx c76pdg3 c1w3gxbd c1x2nfm5 c3rerf6 c1310xgk c1asucjw c2f18he ck22ktf ctwpizd c10gg01r cirj543 c1q35y1w c1qe00ly csevh64 c1b56ixi c1bvpeq0 c6wrcvp cf6fb73 cs1x6nz c1x716p4 c1wtnvb5 c19uhz2d c606rgr`}>
<HtmlEmbed
code={"<img width=\"70%\" height=\"70%\" src=\"https://img.icons8.com/fluency/48/github.png\" alt=\"github\"/>"}
className={`w-html-embed ci2bnlx c1w3gxbd c1x2nfm5 c1axtb1i`} />
<div
id={"Built by Sicelo_Text_Wrapper"}
className={`w-element ct17jza c1fq7rnz c1hr6wm5 c10vexua c1nfjjn`}>
<span
id={"Built by Sicelo_Text"}
className={`w-element c2ljy2p c19ty1vk`}>
{"Sicelo Mduna"}
</span>
</div>
</Link>
</div>
    </>
    
  )
}

export default NavBar_LandingPage