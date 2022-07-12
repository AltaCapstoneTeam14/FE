import React from 'react'
import Footer from "../../Components/Footer/Footer"
import Navbar from '../../Components/Navbar/Navbar'
import '../AboutUs/AboutUs.css'
import rocket from '../../Images/Group.svg'
import idea from '../../Images/Group-2.svg'
import young from '../../Images/young.svg'
import bussiness from '../../Images/bussiness.svg'
import p360 from '../../Images/360.svg'
import authService from '../../Services/auth-services'
import NavAdmin from '../../Components/Navbar/NavAdmin'
import team1 from '../../Images/team1.png'

function AboutUs() {
    const user = authService.getCurrentUser();
    let auth = false
      if (user) {
        auth = true
      }
    return (
        <div>
            <div className='bodyAbout'>
            {
                auth ? 
                    <NavAdmin/>
                 : 
                    <Navbar/>
                
            }
            <div className='title'>
            <h1>About Us</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
            </div>
            <div className='solutions'>
                <div className='solutionTexts'>
                <h1>We Help To Get Solutions</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                <div className='colTeam'>
                    <div className='ourTeams'>
                        <img src={rocket} alt="rocket"></img>
                        <div>
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem Ipsum is simply dummy text the printing and typesetting industry.</p>
                        </div>
                    </div>
                    <div className='ourTeams'>
                        <img src={idea} alt="idea"></img>
                        <div>
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem Ipsum is simply dummy text the printing and typesetting industry.</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className='imageYoung'>
                <img src={young} alt="young"></img>
                </div>
            </div>
            <div className='ourValue'>
            <h2>Our Values</h2>
            </div>
            <div className='ourValues'>
                <div className='side'>
                    <img src={bussiness} alt="bussiness" className='busy'/>
                </div>
                <div >
                    <div className='values'>
                        <img src={rocket} alt="rocket2"></img>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className='values'>
                        <img src={idea} alt="idea2"></img>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className='values'>
                        <img src={p360} alt="p360"></img>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='ourTeam'>
            <h2>Our Team</h2>
            </div>
                <div className='groupTeam'>
                <div className='groupTeamImg'>
                    <img src={team1} alt="idea"></img>
                    <p>Rizaq Afani</p>
                </div>
                <div className='groupTeamImg'>
                    <img src={team1} alt="idea"></img>
                    <p>Stephanus Dhimas</p>
                </div>
                <div className='groupTeamImg'>
                    <img src={team1} alt="idea"></img>
                    <p>Hamid Baehaqi</p>
                </div>
                <div className='groupTeamImg'>
                    <img src={team1} alt="idea"></img>
                    <p>Ghina Faraj</p>
                </div>
                </div>
            </div>
        <Footer></Footer>
        </div>

    )
}



export default AboutUs
