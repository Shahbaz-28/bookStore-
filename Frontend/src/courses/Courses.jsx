import React from 'react'
import Footer from '../components/Footer'
import Course from '../components/Course'
import Navbar from '../components/Navbar'

const Courses = () => {
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen'>
        <Course/>
      </div>
      <Footer/>
    </div>
  )
}

export default Courses
