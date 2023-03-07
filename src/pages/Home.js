import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GithubIcon from '@material-ui/icons/GitHub'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
        <div className='about'>
          <h2>Hi, My Name is Saurabh Rajput</h2>
          <div className='prompt'>
            <p>A frontend developer with a passion for learning and creating.</p>
            <a href='https://www.linkedin.com/in/saurabh-rajput-a99802180/' target='_blank'><LinkedInIcon /></a>
            <a href="mailto:saurabhrajput1503@gmail.com"><EmailIcon /></a>
            <a href='https://github.com/SaurabhRajput15' target='_blank'><GithubIcon /></a>
          </div>
        </div>
        <div className='skills'>
           <h1>Skills</h1>
           <ol className='list'>
             <li className='item'>
              <h2>Front-End</h2>
              <span>
                ReactJS, Redux, HTML, CSS, BootStrap, MaterialUI
              </span>
             </li>
             <li className='item'>
              <h2>Languages</h2>
              <span>Javascript</span>
             </li>
           </ol>
        </div>
    </div>
  )
}

export default Home