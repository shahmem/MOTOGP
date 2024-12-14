import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from '../components/Head'
import Counts from '../components/Counts'
import ServiceSession from '../components/ServiceSession'
import img1 from '../assets/img/services-img-1.jpg'
import img2 from '../assets/img/services-img-2.jpg'
import img3 from '../assets/img/services-img-3.jpg'
import img4 from '../assets/img/services-img-4.jpg'
import Logo from '../components/Logo'

function Services() {
  return (
    <>
    <Header />
    <Head id="Services"/>

    <Counts/>
    <ServiceSession id="Bike Modifying" name="CHECK OUR WORK" className={img1}/>
    <ServiceSession id="Maintenance" name="CONTACT US" className={img2}/>
    <ServiceSession id="Spare parts" name="CONTACT US" className={img3}/>
    <ServiceSession id="Custom Build" name="LET'S TALK" className={img4}/>
    <Logo/>
    <Footer/>

    </>
  )
}

export default Services