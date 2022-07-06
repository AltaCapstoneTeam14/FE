import React, { useState } from 'react'
import './login.css'
import loginImage from '../../Images/login-image.svg'
import loginImage2 from '../../Images/login-image-2.svg'
import loginImage3 from '../../Images/login-image-3.svg'
import handsHello from '../../Images/hands-hello.svg'
import {AiOutlineInfoCircle, AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { Carousel, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import authService from '../../Services/auth-services'

function Login() {

  const [hidePassword, setHidePassword] = useState(true)
  const dataLogin = {
    email : "" ,
    password : ""
  }

  const [Login, setLogin] = useState(dataLogin)

  const [error, setError] = useState([])
  const navigate = useNavigate();

  const Auth = async () => {
    try{
      await authService.login(Login.email,Login.password).then(
        () => {
          navigate("/TopUpPage");
          window.location.reload();
        }, (error) => {
          error.response.data.errors.map((e) => {
            console.log(error.response.data.errors);
            return setError( arr => [...arr, e])
          })
          console.log(error.response.data.errors);
          
          
        }
      )
    }catch (err) {
      console.log(err)
  }
  
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setLogin({...Login, [e.target.name] : value})
  }

  const handleKeyPress = (e) => {
    if(e.key === "Enter"){
       Auth()
    }
}

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      navigate("/")
    }
  }, []);

  return (
    <>
    <div className='container-fluid'>

    </div>
      <div className='d-flex flex-row w-100'>
        <div className='left w-100 d-flex align-items-center justify-content-center'>
          <Carousel className='login-image' controls={false} indicators={false} fade={false} interval={2000}>
            <Carousel.Item >
             <img src={loginImage} alt='logi' className='login-image' />
            </Carousel.Item>
            <Carousel.Item>
             <img src={loginImage2} alt='login2'className='login-image' />
            </Carousel.Item>
            <Carousel.Item>
             <img src={loginImage3} alt='login3' className='login-image'/>
            </Carousel.Item>
          </Carousel>
          
        </div>
        <div className='right w-100 d-flex align-items-center justify-content-center'>
          <div className='login d-flex flex-column'>
            <div className='d-flex flex-column mb-5'>
              <img src={handsHello} alt='login4' style={{width : '36px'}} className='mb-3'/>
              <span className='fs-3 fw-bold mb-4'>Welcome Back!</span>
              <span>please login to access your account.</span>
              {
                error.length !== 0 && 
                <div className='mt-4'>
                {error.map((e, i) =>
                    <li className='text-danger'>
                      <span key={i} className='text-danger'>{e}</span>
                    </li>
                    
                  )}
                </div>
                  
              }
            </div>

            <Form onKeyDown={handleKeyPress}>
            <div className='d-flex flex-column'>
              <div className='d-flex flex-row justify-content-between align-items-center'>
                <Form.Label >E-mail or phone number</Form.Label>
                <AiOutlineInfoCircle size='16px'/>
              </div>
              <Form.Control type="text" placeholder='Type your e-mail or phone number' className='border-0 mb-4' name = "email" value={Login.email} onChange={handleChange}/>

              <Form.Label >Password</Form.Label>
              
              <div>
                <li className='visible position-absolute list-unstyled'>
                  <button type='button' className='button-hide' onClick={()=>setHidePassword(!hidePassword)}>
                    {hidePassword? (<AiOutlineEyeInvisible size='16px' />) : (<AiOutlineEye size='16px'/>)}
                  </button>
                  
                </li>
                <Form.Control type={hidePassword? "password" : "text"} placeholder='Type your password' className='border-0 mb-2' name='password' value={Login.password} onChange={handleChange} />
              </div>
              
              <Link to='#' className='text-decoration-none mb-4'><span className='forgot'>Forgot password?</span></Link>

              <button type='button' className='login-btn btn' onClick={Auth}><span className='fs-5'>Log In</span></button>
            </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
