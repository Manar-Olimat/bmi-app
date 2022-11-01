import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='footer'>
           
      <p>2022 BMI Online. </p>
      <FaTwitter
 style={{color:'green', cursor:'pointer'}} 
 />
  <FaFacebookF
 style={{color:'green', cursor:'pointer'}} 
 />  <FaDiscord
 style={{color:'green', cursor:'pointer'}} 
 />  <FaYoutube
 style={{color:'green', cursor:'pointer'}} 
 />
    </div>
  )
}

export default Footer