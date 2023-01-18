import React from 'react'
import './index.css'
import Banner from '../../components/Banner/Banner'
import Features from '../../components/Features/Features'
import About from '../../components/About/index'
import Community from '../../components/Community/Community'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Features/>
      <About/>
      <Community/>
      <Footer/>
    </>
  )
}

export default Home