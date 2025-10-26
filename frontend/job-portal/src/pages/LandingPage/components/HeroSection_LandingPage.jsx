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
className={`w-element c127imsv`}>
<Link
href={"https://webstudio.is/?via=badge"}
target={"_blank"}
id={"Built by Sicelo_Link"}
className={`w-element cc42tz1 c1fqs2kx c76pdg3 c1w3gxbd c1x2nfm5 c3rerf6 c1310xgk c1asucjw c2f18he ck22ktf ctwpizd c10gg01r cirj543 c1q35y1w c1qe00ly csevh64 c1b56ixi c127imsv c6wrcvp cf6fb73 cs1x6nz c1x716p4 c1wtnvb5 c19uhz2d c606rgr`}>
</Link>
<div
id={"Hero_Section_Container"}
className={`w-element c9u4g1h cyhp31a c127imsv cbcqhl0 c104rs0j c1mjkw5a c10wsdky c6hggw4`}>
<div
id={"Text Wrapper"}
className={`w-element cwcs45o c85rdul chcv05 ci2bnlx c1nngskv c12lgn0z c1qpctlt c341gyy c1go5bsf cvnwuxi c1gg3wjy c1w3gxbd c1x2nfm5 cyhp31a cukb7z3 csdnt2n c1ytlx9z c1dcmm6v c146a6u1`}>
<div
id={"Heading_Wrapper"}
className={`w-element`}>
<p
id={"Main_Heading"}
className={`w-element c1088tlr co3wmmd c1rj0lez c1mhugz2 c16wl4ek ck5n32e cym49es c1hqrv9o c19ty1vk c1wyw39v c1r018x4`}>
{"Find Your Dream Job or Perfect Hire 💫"}
</p>
</div>
<div
id={"Description_Wrapper"}
className={`w-element`}>
<p
className={`w-element cimknqo chcv05 ck5n32e c1qe00ly c1nfjjn c1hqrv9o c1b56ixi c1vs95bj c19ty1vk caued8c cjrfx4k c1lidgyn c1myk96s`}>
{"Connecting talent and opportunity — one click at a time."}
</p>
</div>
</div>
<hr
className={`w-element c1d10wc5 c341gyy c1go5bsf cvnwuxi c1gg3wjy c8vvqdg c7skfvf coxmqoc`} />
<Box
className={`w-box ci2bnlx c1w3gxbd c1x2nfm5 c12lgn0z c1qpctlt c1ohdqzf c85rdul cwcs45o cukb7z3 cyhp31a c1aa8hwe`}>
<Link
id={"find_jobs"}
href={"/find-jobs"}
onClick={(e) => {
    e.preventDefault();
    navigate("/find-jobs");
  }}
className={`w-element ci2bnlx c1w3gxbd c1x2nfm5 c12lgn0z c1qpctlt c341gyy c1go5bsf cvnwuxi c1gg3wjy c168lqk2 c8vvqdg cx7cu72 c1dmyc2u c1ev9288 cj1w5zi c1qhjyr7 c1j245bt cdt1gbr c1wtt84r c1mep0jb`}>
<HtmlEmbed
code={"<img width=\"25\" height=\"25\" src=\"https://img.icons8.com/3d-fluency/94/search.png\" alt=\"search\"/>"}
className={`w-html-embed`} />
<h1
id={"find_jobs_text"}
className={`w-element cimknqo c13578e8 csevh64 c1nfjjn c3adflw c19ty1vk c1hqrv9o c1qe00ly`}>
{"Find Jobs"}
</h1>
</Link>
<Link
id={"post_jobs"}
href={"/post-job"}
onClick={(e) => {
    e.preventDefault();
    isAuthenticated && user.role === "employer" ? 
    navigate("/post-job") 
    : navigate("/login");
  }}
className={`w-element ci2bnlx c1w3gxbd c1x2nfm5 c12lgn0z c1qpctlt c341gyy c1go5bsf cvnwuxi c1gg3wjy c168lqk2 c8vvqdg cx7cu72 c1dmyc2u c1ev9288 cj1w5zi c1qhjyr7 c1j245bt cdt1gbr c1wtt84r c1mep0jb`}>
<HtmlEmbed
code={"<img width=\"25\" height=\"25\" src=\"https://img.icons8.com/fluency/48/upload-2.png\" alt=\"upload-2\"/>"}
className={`w-html-embed`} />
<h1
id={"post_jobs_text"}
className={`w-element cimknqo c13578e8 csevh64 c1nfjjn c3adflw c19ty1vk c1hqrv9o c1qe00ly`}>
{"Post a Job"}
</h1>
</Link>
</Box>
<hr
className={`w-element c1d10wc5 c341gyy c1go5bsf cvnwuxi c1gg3wjy c7skfvf coxmqoc`} />
<Box
id={"Metrics"}
className={`w-box ci2bnlx c1w3gxbd c1x2nfm5 cutzsdt cetmy6n c1ohdqzf crhmlqv cwcs45o cukb7z3 cyhp31a c1meb0s7 c1aa8hwe`}>
<div
id={"Active_users"}
className={`w-element ci2bnlx c1nngskv c1w3gxbd c1x2nfm5`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/group.png\" alt=\"group\"/>"}
className={`w-html-embed c341gyy c1go5bsf cvnwuxi c1gg3wjy cx7cu72`} />
<h1
className={`w-element c1088tlr c13578e8 c1nfjjn csevh64 c16wl4ek c19ty1vk ck5n32e c1hqrv9o`}>
{"2.4M+"}
</h1>
<p
className={`w-element c1088tlr c13578e8 c5mt8zc cesi9tq`}>
{"Active Users"}
</p>
</div>
<div
id={"Companies"}
className={`w-element ci2bnlx c1nngskv c1w3gxbd c1x2nfm5`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/client-company.png\" alt=\"client-company\"/>"}
className={`w-html-embed c341gyy c1go5bsf cvnwuxi c1gg3wjy cx7cu72`} />
<h1
className={`w-element c1088tlr c13578e8 c1nfjjn csevh64 c16wl4ek c19ty1vk ck5n32e c1hqrv9o`}>
{"50K+"}
</h1>
<p
className={`w-element c1088tlr c13578e8 c5mt8zc cesi9tq`}>
{"Companies"}
</p>
</div>
<div
className={`w-element ci2bnlx c1nngskv c1w3gxbd c1x2nfm5`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/positive-dynamic.png\" alt=\"positive-dynamic\"/>"}
className={`w-html-embed c341gyy c1go5bsf cvnwuxi c1gg3wjy cx7cu72`} />
<h1
className={`w-element c1088tlr c13578e8 c1nfjjn csevh64 c16wl4ek c19ty1vk ck5n32e c1hqrv9o`}>
{"150K+"}
</h1>
<p
className={`w-element c1088tlr c13578e8 c5mt8zc cesi9tq`}>
{"Jobs Posted"}
</p>
</div>
</Box>
<hr
className={`w-element c1d10wc5 c341gyy c1go5bsf cvnwuxi c1gg3wjy c7skfvf c19ui0j`} />
<div
id={"Text Wrapper"}
className={`w-element cwcs45o c11g6ikc chcv05 ci2bnlx c1nngskv c12lgn0z c1qpctlt c341gyy c1go5bsf cvnwuxi c1gg3wjy c1w3gxbd cyr0vbi cyhp31a cukb7z3 csdnt2n c1ytlx9z c1dcmm6v c146a6u1`}>
<div
id={"Heading_Wrapper"}
className={`w-element`}>
<p
id={"Main_Heading"}
className={`w-element c1088tlr co3wmmd c1nfjjn c1mhugz2 c16wl4ek ck5n32e c1jzqj3j c1hqrv9o c19ty1vk c1wyw39v c1r018x4`}>
{"Everything You Need to"}
</p>
<p
id={"Main_Heading"}
className={`w-element c1088tlr co3wmmd c1rj0lez c1mhugz2 c16wl4ek ck5n32e c1jzqj3j c1hqrv9o c19ty1vk c1wyw39v c1r018x4`}>
{"Succeed ✨"}
</p>
</div>
<div
id={"Description_Wrapper"}
className={`w-element`}>
<p
className={`w-element cimknqo chcv05 c1qe00ly c1nfjjn c1hqrv9o c1b56ixi c1vs95bj c19ty1vk ci2bnlx c2i7lsk cyb20mm c9b3i8f caued8c cjrfx4k c1lidgyn c1myk96s`}>
{"Whether you're looking for your next opporunity or the perfect candidate. "}
<br />
{"We have the tools and features to make it happen."}
</p>
</div>
</div>
</div>
<div
id={"Info_Section_Container"}
className={`w-element c9u4g1h cyhp31a c3j0fp8 cyw2pjs cbcqhl0 c104rs0j c1mjkw5a c10wsdky c6hggw4`}>
<div
className={`w-element`}>
<div
className={`w-element`}>
<h2
className={`w-element cimknqo c13578e8 c1nfjjn c1hqrv9o`}>
{"For Job Seekers"}
</h2>
<hr
className={`w-element c1ne2a9a c1yndkkb cndsfpz c1yauu33 cusdrxj c1of13js ce31tc2 cstj0k1 cx27cnw crwpan5 c341gyy c1go5bsf cvnwuxi c1gg3wjy`} />
</div>
<div
className={`w-element ci2bnlx cwenbi c1rd3agv c1x2nfm5 c1bb3mg3 crhg7yk c8fwvup c4n67io c1lg2guw cwpgwm5 cql3xvv c188xk27 c160ruuu c5ip2l4 c1ok1if4 cyebhdc c1fa1q0j cu3rn4g c1aa8hwe c13j74rx c1msncyv cedlkqd cykw0an c1t4x3n4 cvexot5 cj1w5zi c1qhjyr7 c1j245bt cdt1gbr c1wtt84r c1mep0jb`}>
<div
className={`w-element`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/search-in-browser.png\" alt=\"search-in-browser\"/>"}
className={`w-html-embed`} />
</div>
<div
className={`w-element ci2bnlx c1nngskv c1qpctlt c12lgn0z`}>
<h4
className={`w-element cimknqo c13578e8 c1nfjjn c1q0bj6q c19ty1vk`}>
{"Smart Job Matching"}
</h4>
<p
className={`w-element cimknqo c13578e8 c10so75e c1q0bj6q c1uu05kn c19ty1vk c4ok4le`}>
{"AI-powered algorithm matches you with relevant opportunities based on your skills and preferences."}
</p>
</div>
</div>
<div
className={`w-element ci2bnlx cwenbi c1rd3agv c1x2nfm5 c1bb3mg3 crhg7yk c8fwvup c4n67io c1lg2guw cwpgwm5 cql3xvv c188xk27 c160ruuu c5ip2l4 c1ok1if4 cyebhdc c1fa1q0j cu3rn4g c1aa8hwe c13j74rx c1msncyv cedlkqd cykw0an c1t4x3n4 cvexot5 cj1w5zi c1qhjyr7 c1j245bt cdt1gbr c1wtt84r c1mep0jb`}>
<div
className={`w-element`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/resume.png\" alt=\"resume\"/>"}
className={`w-html-embed`} />
</div>
<div
className={`w-element ci2bnlx c1nngskv c1qpctlt c12lgn0z`}>
<h4
className={`w-element cimknqo c13578e8 c1nfjjn c1q0bj6q c19ty1vk`}>
{"Resume Builder"}
</h4>
<p
className={`w-element cimknqo c13578e8 c10so75e c1q0bj6q c1uu05kn c19ty1vk c4ok4le`}>
{"Create professional resumes with our intuitive builder and templates designed by experts."}
</p>
</div>
</div>
<div
className={`w-element ci2bnlx cwenbi c1rd3agv c1x2nfm5 c1bb3mg3 crhg7yk c8fwvup c4n67io c1lg2guw cwpgwm5 cql3xvv c188xk27 c160ruuu c5ip2l4 c1ok1if4 cyebhdc c1fa1q0j cu3rn4g c1aa8hwe c13j74rx c1msncyv cedlkqd cykw0an c1t4x3n4 cvexot5 cj1w5zi c1qhjyr7 c1j245bt cdt1gbr c1wtt84r c1mep0jb`}>
<div
className={`w-element`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/man-typing.png\" alt=\"man-typing\"/>"}
className={`w-html-embed`} />
</div>
<div
className={`w-element ci2bnlx c1nngskv c1qpctlt c12lgn0z`}>
<h4
className={`w-element cimknqo c13578e8 c1nfjjn c1q0bj6q c19ty1vk`}>
{"Direct Communication"}
</h4>
<p
className={`w-element cimknqo c13578e8 c10so75e c1q0bj6q c19ty1vk`}>
{"Connect directly with hiring managers and recruiters through our secure messaging platform."}
</p>
</div>
</div>
<div
className={`w-element ci2bnlx cwenbi c1rd3agv c1x2nfm5 c1bb3mg3 crhg7yk c8fwvup c4n67io c1lg2guw cwpgwm5 cql3xvv c188xk27 c160ruuu c5ip2l4 c1ok1if4 cyebhdc c1fa1q0j cu3rn4g c1aa8hwe c13j74rx c1msncyv cedlkqd cykw0an c1t4x3n4 cvexot5 cj1w5zi c1qhjyr7 c1j245bt cdt1gbr c1wtt84r c1mep0jb`}>
<div
className={`w-element`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/learning.png\" alt=\"learning\"/>"}
className={`w-html-embed`} />
</div>
<div
className={`w-element ci2bnlx c1nngskv c1qpctlt c12lgn0z`}>
<h4
className={`w-element cimknqo c13578e8 c1nfjjn c1q0bj6q c19ty1vk`}>
{"Skills Assessment"}
</h4>
<p
className={`w-element cimknqo c13578e8 c10so75e c1q0bj6q c19ty1vk`}>
{"Showcase your abilities with verified skill tests and earn badges that employers trust."}
</p>
</div>
</div>
</div>
<div
className={`w-element`}>
<div
className={`w-element`}>
<h2
className={`w-element cimknqo c13578e8 c1nfjjn c1hqrv9o`}>
{"For Employers"}
</h2>
<hr
className={`w-element c1bjkfz5 c1yndkkb cndsfpz c1yauu33 cusdrxj c1of13js ce31tc2 cstj0k1 cx27cnw crwpan5 c341gyy c1go5bsf cvnwuxi c1gg3wjy`} />
</div>
<div
className={`w-element ci2bnlx cwenbi c1rd3agv c1x2nfm5 c1bb3mg3 crhg7yk c8fwvup c4n67io c1lg2guw cwpgwm5 cql3xvv c188xk27 c160ruuu c5ip2l4 csj8ajf c1gibwtg cu7yscn cdvo73a c1aa8hwe c86zln4 c8i6wbd c1toftbv c1ld0fic c90nzc8`}>
<div
className={`w-element`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/group.png\" alt=\"group\"/>"}
className={`w-html-embed`} />
</div>
<div
className={`w-element ci2bnlx c1nngskv c1qpctlt c12lgn0z`}>
<h4
className={`w-element cimknqo c13578e8 c1nfjjn c1q0bj6q c19ty1vk`}>
{"Talent Pool Access"}
</h4>
<p
className={`w-element cimknqo c13578e8 c10so75e c1q0bj6q c1uu05kn ckuqodx c19ty1vk c4ok4le`}>
{"Access our vast database of pre-screened candidates and find the perfect fit for your team."}
</p>
</div>
</div>
<div
className={`w-element ci2bnlx cwenbi c1rd3agv c1x2nfm5 c1bb3mg3 crhg7yk c8fwvup c4n67io c1lg2guw cwpgwm5 cql3xvv c188xk27 c160ruuu c5ip2l4 csj8ajf c1gibwtg cu7yscn cdvo73a c1aa8hwe c86zln4 c8i6wbd c1toftbv c1ld0fic c90nzc8`}>
<div
className={`w-element`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/marketing.png\" alt=\"marketing\"/>"}
className={`w-html-embed`} />
</div>
<div
className={`w-element ci2bnlx c1nngskv c1qpctlt c12lgn0z`}>
<h4
className={`w-element cimknqo c13578e8 c1nfjjn c1q0bj6q c19ty1vk`}>
{"Analytics Dashboard"}
</h4>
<p
className={`w-element cimknqo c13578e8 c10so75e c1q0bj6q c19ty1vk`}>
{"Track your hiring performance with detailed analytics and insights on candidate engagement."}
</p>
</div>
</div>
<div
className={`w-element ci2bnlx cwenbi c1rd3agv c1x2nfm5 c1bb3mg3 crhg7yk c8fwvup c4n67io c1lg2guw cwpgwm5 cql3xvv c188xk27 c160ruuu c5ip2l4 csj8ajf c1gibwtg cu7yscn cdvo73a c1aa8hwe c86zln4 c8i6wbd c1toftbv c1ld0fic c90nzc8`}>
<div
className={`w-element`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/id-verified.png\" alt=\"id-verified\"/>"}
className={`w-html-embed`} />
</div>
<div
className={`w-element ci2bnlx c1nngskv c1qpctlt c12lgn0z`}>
<h4
className={`w-element cimknqo c13578e8 c1nfjjn c1q0bj6q c19ty1vk`}>
{"Verified Candidates"}
</h4>
<p
className={`w-element cimknqo c13578e8 c10so75e c1q0bj6q c19ty1vk`}>
{"All candidates undergo background verification to ensure you're hiring trustworthy professionals."}
</p>
</div>
</div>
<div
className={`w-element ci2bnlx cwenbi c1rd3agv c1x2nfm5 c1bb3mg3 crhg7yk c8fwvup c4n67io c1lg2guw cwpgwm5 cql3xvv c188xk27 c160ruuu c5ip2l4 csj8ajf c1gibwtg cu7yscn cdvo73a c1aa8hwe c13j74rx c1msncyv cedlkqd cykw0an c90nzc8`}>
<div
className={`w-element`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/delivery-time--v1.png\" alt=\"delivery-time--v1\"/>"}
className={`w-html-embed`} />
</div>
<div
className={`w-element ci2bnlx c1nngskv c1qpctlt c12lgn0z`}>
<h4
className={`w-element cimknqo c13578e8 c1nfjjn c1q0bj6q c19ty1vk`}>
{"Quick Hiring"}
</h4>
<p
className={`w-element cimknqo c13578e8 c10so75e c1q0bj6q c19ty1vk`}>
{"Streamlined hiring process reduces time-tto-hire by 60% with automated screening tools."}
</p>
</div>
</div>
</div>
</div>
<hr
className={`w-element c1d10wc5 c341gyy c1go5bsf cvnwuxi c1gg3wjy c8vvqdg c7skfvf c1x3v1ml coxmqoc`} />
<div
className={`w-element`}>
<div
id={"Text Wrapper"}
className={`w-element cwcs45o c11g6ikc chcv05 ci2bnlx c1nngskv c12lgn0z c1qpctlt c341gyy c1go5bsf cvnwuxi c1gg3wjy c1w3gxbd cyr0vbi cyhp31a cukb7z3 csdnt2n c1ytlx9z c1dcmm6v c146a6u1`}>
<div
id={"Heading_Wrapper"}
className={`w-element ci2bnlx c12lgn0z c1qpctlt`}>
<p
id={"Main_Heading"}
className={`w-element c1088tlr co3wmmd c1nfjjn c1mhugz2 c16wl4ek ck5n32e c1jzqj3j c1hqrv9o c19ty1vk c1wyw39v c1r018x4`}>
{"Platform"}
</p>
<p
id={"Main_Heading"}
className={`w-element c1088tlr co3wmmd c1rj0lez c1mhugz2 c16wl4ek ck5n32e c1jzqj3j c1hqrv9o c19ty1vk c1wyw39v c1r018x4`}>
{"Analytics 📈"}
</p>
</div>
<div
id={"Description_Wrapper"}
className={`w-element`}>
<p
className={`w-element cimknqo chcv05 c1qe00ly c1nfjjn c1hqrv9o c1b56ixi c1vs95bj c19ty1vk ci2bnlx c2i7lsk cyb20mm c9b3i8f caued8c cjrfx4k c1lidgyn c1myk96s`}>
{"Real-time insights and data-driven results that showcase  the power of our platform in connecting talent with opportunities."}
</p>
</div>
</div>
<div
className={`w-element c3j0fp8 cm74e2p c6jhqhw c13yeamf c1vsuwav`}>
<div
className={`w-element chl20f5 c16yoty5 c1e3xo02 cojrwsj c341gyy c1go5bsf cvnwuxi c1gg3wjy c8vvqdg c46a2q4 c1bjiedj`}>
<div
className={`w-element ci2bnlx cwenbi c1w3gxbd cyr0vbi cutzsdt cetmy6n`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/group.png\" alt=\"group\"/>"}
className={`w-html-embed chl20f5`} />
<div
className={`w-element`}>
<h5
className={`w-element cimknqo c13578e8 c1b6w1cv c1monnjc c1hqrv9o c15d0fz9 c341gyy c1go5bsf cvnwuxi c1gg3wjy csdnt2n c1vyxfk7`}>
{"+15%"}
</h5>
</div>
</div>
<div
className={`w-element c1q0bj6q`}>
<h1
className={`w-element c1088tlr c13578e8 c1nfjjn c1vs95bj c16wl4ek c19ty1vk ck5n32e c1q0bj6q c1c3e7p9`}>
{"2.4M+"}
</h1>
<p
className={`w-element c1088tlr c13578e8 c5mt8zc cesi9tq`}>
{"Active Users"}
</p>
</div>
</div>
<div
className={`w-element chl20f5 c16yoty5 c1e3xo02 cojrwsj c341gyy c1go5bsf cvnwuxi c1gg3wjy c8vvqdg c46a2q4 c1bjiedj`}>
<div
className={`w-element ci2bnlx cwenbi c1w3gxbd cyr0vbi cutzsdt cetmy6n`}>
<HtmlEmbed
code={"<img width=\"25\" height=\"25\" src=\"https://img.icons8.com/fluency/48/upload-2.png\" alt=\"upload-2\"/>"}
className={`w-html-embed chl20f5`} />
<div
className={`w-element`}>
<h5
className={`w-element cimknqo c13578e8 c1b6w1cv c1monnjc c1hqrv9o c15d0fz9 c341gyy c1go5bsf cvnwuxi c1gg3wjy csdnt2n c1vyxfk7`}>
{"+22%"}
</h5>
</div>
</div>
<div
className={`w-element c1q0bj6q`}>
<h1
className={`w-element c1088tlr c13578e8 c1nfjjn c1vs95bj c16wl4ek c19ty1vk ck5n32e c1q0bj6q c1c3e7p9`}>
{"150K+"}
</h1>
<p
className={`w-element c1088tlr c13578e8 c5mt8zc cesi9tq`}>
{"Jobs Posted"}
</p>
</div>
</div>
<div
className={`w-element chl20f5 c16yoty5 c1e3xo02 cojrwsj c341gyy c1go5bsf cvnwuxi c1gg3wjy c8vvqdg c46a2q4 c1bjiedj`}>
<div
className={`w-element ci2bnlx cwenbi c1w3gxbd cyr0vbi cutzsdt cetmy6n`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/receipt-approved.png\" alt=\"receipt-approved\"/>"}
className={`w-html-embed chl20f5`} />
<div
className={`w-element`}>
<h5
className={`w-element cimknqo c13578e8 c1b6w1cv c1monnjc c1hqrv9o c15d0fz9 c341gyy c1go5bsf cvnwuxi c1gg3wjy csdnt2n c1vyxfk7`}>
{"+18%"}
</h5>
</div>
</div>
<div
className={`w-element c1q0bj6q`}>
<h1
className={`w-element c1088tlr c13578e8 c1nfjjn c1vs95bj c16wl4ek c19ty1vk ck5n32e c1q0bj6q c1c3e7p9`}>
{"89K+"}
</h1>
<p
className={`w-element c1088tlr c13578e8 c5mt8zc cesi9tq`}>
{"Successful Hires"}
</p>
</div>
</div>
<div
className={`w-element chl20f5 c16yoty5 c1e3xo02 cojrwsj c341gyy c1go5bsf cvnwuxi c1gg3wjy c8vvqdg c46a2q4 c1bjiedj`}>
<div
className={`w-element ci2bnlx cwenbi c1w3gxbd cyr0vbi cutzsdt cetmy6n`}>
<HtmlEmbed
code={"<img width=\"30\" height=\"30\" src=\"https://img.icons8.com/fluency/48/star--v1.png\" alt=\"star--v1\"/>"}
className={`w-html-embed chl20f5`} />
<div
className={`w-element`}>
<h5
className={`w-element cimknqo c13578e8 c1b6w1cv c1monnjc c1hqrv9o c15d0fz9 c341gyy c1go5bsf cvnwuxi c1gg3wjy csdnt2n c1vyxfk7`}>
{"+8%"}
</h5>
</div>
</div>
<div
className={`w-element c1q0bj6q`}>
<h1
className={`w-element c1088tlr c13578e8 c1nfjjn c1vs95bj c16wl4ek c19ty1vk ck5n32e c1q0bj6q c1c3e7p9`}>
{"94%"}
</h1>
<p
className={`w-element c1088tlr c13578e8 c5mt8zc cesi9tq`}>
{"Match Rate"}
</p>
</div>
</div>
</div>
</div>
<hr
className={`w-element c341gyy c1go5bsf cvnwuxi c1gg3wjy c8vvqdg c7skfvf c1x3v1ml c1nvmj4b coxmqoc`} />
</div>
    </>
  )
}

export default HeroSection_LandingPage