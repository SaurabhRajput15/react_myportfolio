import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GithubIcon from '@material-ui/icons/GitHub'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <a href='https://www.linkedin.com/in/saurabh-rajput-a99802180/' target='_blank'><LinkedInIcon /></a>
          <a href="mailto:saurabhrajput1503@gmail.com" target='_blank'><EmailIcon /></a>
          <a href='https://github.com/SaurabhRajput15' target='_blank'><GithubIcon /></a>
        </div>
        <p> &copy; 2022 </p>
    </div>
  )
}

export default Footer