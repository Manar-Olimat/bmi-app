import React from 'react'

const Header = () => {
  return (
    <div>
       
      <div className="container header">
        <a href="#" className="logo">
          <img src="https://lh3.googleusercontent.com/IoYvSVgjoeLjoic92ApXFq7GoCEKkJPKwTfv3F1_13oiL9WfWDH0j8jCaGQ_uKCKkw" />
        </a>

        <nav className='nav'>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">What is BMI?</a></li>
            <li><a href="#">Calculate your BMI</a></li>
          </ul>
        </nav>
      </div>
   
    </div>
  )
}

export default Header