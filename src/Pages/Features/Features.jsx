import Navbar from '../../Components/Navbar/Navbar'
import { Container, Button, Form } from "react-bootstrap";
import "../Features/Features.css"
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveSubscribe } from "../../features/SubscribeSlice";
import featuresImg from '../../Images/Feature-img.png'
import news from "../../Images/news 1.png"
import { BsChevronDown } from "react-icons/bs";
import Footer from '../../Components/Footer/Footer';
import authService from '../../Services/auth-services';
import NavAdmin from '../../Components/Navbar/NavAdmin';

function Features() {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const user = authService.getCurrentUser();
  let auth = false
  if (user) {
    auth = true
  }
  const createTopUp = (e) => {
    e.preventDefault();
    dispatch(saveSubscribe({ email }));
    setEmail('');
  } 
    
  return (
    <div>
      <div>
      <div>
      {
          auth ? (
            <NavAdmin/>
          ) : (
            <Navbar/>
          )
        }
      </div>
      <div className='imgFeatures'>
        <img src={featuresImg} alt="featuresImg"></img>
      </div>

      <Container>
          <div className="frequently">
            <h3>Frequently asked questions <BsChevronDown style={{ marginLeft: "2rem" }} /></h3>
          </div>

          <div className="box">
            <img src={news} alt="news"/>
            <p>Subcribe to our Newsletter</p>

            <Form onSubmit={createTopUp} className="form">
              <div>
                <input 
                type="text" 
                className="inputEmail"
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                />
              </div>
                <Button variant="success" type="submit" className="subscribeButton">Submit</Button>
            </Form>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default Features
