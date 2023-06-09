import React from 'react'
import {BsLinkedin ,BsGithub , BsDribbble} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header-socials'>
        <a href="https://www.linkedin.com/in/agungharwinn/" target='_blank' rel="noopener noreferrer">< BsLinkedin/></a>
        <a href="https://github.com/Harwin14" target='_blank'rel="noopener noreferrer"><BsGithub /></a>
        <a href="https://dribbble.com" target='_blank'rel="noopener noreferrer"><BsDribbble/></a>
    </div>
  )
}

export default HeaderSocials