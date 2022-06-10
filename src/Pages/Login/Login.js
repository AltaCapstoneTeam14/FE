import React, { useState } from 'react'
import './login.css'
import loginImage from '../../Assets/Images/login-image.svg'
import loginImage2 from '../../Assets/Images/login-image-2.svg'
import loginImage3 from '../../Assets/Images/login-image-3.svg'
import handsHello from '../../Assets/Images/hands-hello.svg'
import {AiOutlineInfoCircle, AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { Carousel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Login() {

  const [hidePassword, setHidePassword] = useState(true)

  return (
    <>
      <div className='d-flex flex-row w-100'>
        <div className='left w-100 d-flex align-items-center justify-content-center'>
          <Carousel className='login-image' controls={false} indicators={false} fade={false} interval={2000}>
            <Carousel.Item >
             <img src={loginImage} alt='login-image' className='login-image' />
            </Carousel.Item>
            <Carousel.Item>
             <img src={loginImage2} alt='login-image2'className='login-image' />
            </Carousel.Item>
            <Carousel.Item>
             <img src={loginImage3} alt='login-image3' className='login-image'/>
            </Carousel.Item>
          </Carousel>
          
        </div>
        <div className='right w-100 d-flex align-items-center justify-content-center'>
          <div className='login d-flex flex-column'>
            <div className='d-flex flex-column mb-5'>
              <img src={handsHello} alt='login-image' style={{width : '36px'}} className='mb-3'/>
              <span className='fs-3 fw-bold mb-4'>Welcome Back!</span>
              <span>please login to access your account.</span>
            </div>
            <div className='d-flex flex-column'>
              <div className='d-flex flex-row justify-content-between align-items-center'>
                <Form.Label >E-mail or phone number</Form.Label>
                <AiOutlineInfoCircle size='16px'/>
              </div>
              <Form.Control type="text" placeholder='Type your e-mail or phone number' className='border-0 mb-4'/>

              <Form.Label >Password</Form.Label>
              
              <div>
                <li className='visible position-absolute list-unstyled'>
                  <button type='button' className='button-hide' onClick={()=>setHidePassword(!hidePassword)}>
                    {hidePassword? (<AiOutlineEyeInvisible size='16px' />) : (<AiOutlineEye size='16px'/>)}
                  </button>
                  
                </li>
                <Form.Control type={hidePassword? "password" : "text"} placeholder='Type your password' className='border-0 mb-2'/>
              </div>
              
              <Link to='#' className='text-decoration-none mb-4'><span className='forgot'>Forgot password?</span></Link>

              <button type='button' className='login-btn btn'><span className='fs-5'>Log In</span></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
