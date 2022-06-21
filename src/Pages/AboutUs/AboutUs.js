import React from 'react'
import styled from 'styled-components'
import Navbar from '../../Components/Navbar/Navbar'
import '../AboutUs/AboutUs.css'
import rocket from '../../Images/Group.svg'
import idea from '../../Images/Group-2.svg'
import young from '../../Images/young.svg'
import bussiness from '../../Images/bussiness.svg'
import p360 from '../../Images/360.svg'


function AboutUs() {
    return (
        
        <div className='bodyAbout'>
            <Navbar/>
            <div className='title'>
            <h1>About Us</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
            </div>
            <div className='solutions'>
                <div className='solutionTexts'>
                <h1>We Help To Get Solutions</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                <div className='colTeam'>
                    <div className='ourTeam'>
                        <img src={rocket} style={{height: "120px", width:"120px"}}></img>
                        <div>
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem Ipsum is simply dummy text the printing and typesetting industry.</p>
                        </div>
                    </div>
                    <div className='ourTeam'>
                        <img src={idea} style={{height: "120px", width:"120px"}}></img>
                        <div>
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem Ipsum is simply dummy text the printing and typesetting industry.</p>
                        </div>
                    </div>
                </div>
                </div>
                
                <img src={young}></img>
            </div>
            <button>Our Team </button>
            <h2 style={{ margin: "60px 0"}}>Our Values</h2>
            <div className='ourValues'>
                <div className='side'>
                    <img src={bussiness} className='busy'/>
                </div>
                <div >
                    <div className='values'>
                        <img src={rocket}></img>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className='values'>
                        <img src={idea}></img>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className='values'>
                        <img src={p360}></img>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
            </div>
        </div>
        

    )
}



export default AboutUs
