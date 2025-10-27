import React from 'react'
import NavBar_LandingPage from '../LandingPage/components/NavBar_LandingPage'
import HeroSection_LandingPage from '../LandingPage/components/HeroSection_LandingPage'
import InfoSection_LandingPage from '../LandingPage/components/InfoSection_LandingPage'
import Analytics_LandingPage from '../LandingPage/components/Analytics_LandingPage'
import Footer_LandingPage from '../LandingPage/components/Footer_LandingPage'

const LandingPage = () => {
  const isAuthenticated = true;
  const user = {fullName: "Alex", role : "employers"};
  return (
    <>
    <NavBar_LandingPage isAuthenticated={isAuthenticated} user={user}/>

    <HeroSection_LandingPage isAuthenticated={isAuthenticated} user={user}/>

    <InfoSection_LandingPage/>

    <Analytics_LandingPage/>

    <Footer_LandingPage/>
    </>
  )
}

export default LandingPage