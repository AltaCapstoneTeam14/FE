import React from 'react'
import Footer from "../../Components/Footer/Footer"
import Navbar from '../../Components/Navbar/Navbar'
import '../AboutUs/AboutUs.css'
import rocket from '../../Images/Group.svg'
import idea from '../../Images/Group-2.svg'
import young from '../../Images/young.svg'
import bussiness from '../../Images/bussiness.svg'
import authService from '../../Services/auth-services'
import NavAdmin from '../../Components/Navbar/NavAdmin'
import UIUX from '../../Images/UIUX.jpg'
import Mobile from '../../Images/Mobile.jpg'
import Frontend from '../../Images/Frontend.jpg'
import team1 from '../../Images/team1.png'
import Values1 from '../../Images/Values1.png'
import Values2 from '../../Images/Values2.png'
import Values3 from '../../Images/Values3.png'

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
            <p>Bishapay Build an ecosystem and payment platform as well as financial services that suit the needs of the middle class/aspirants in Indonesia.</p>
            </div>
            <div className='solutions'>
                <div className='solutionTexts'>
                <h1>We Help To Get Solutions</h1>
                <p>Encouraging financial inclusion and economic inclusion to encourage national economic growth.</p>
                <div className='colTeam'>
                    <div className='ourTeams'>
                        <img src={rocket} alt="rocket"></img>
                        <div>
                            <h2>Rocket Pay</h2>
                            <p>Initiative to prosper Indonesian society through expansion access to digital finance in various aspects.</p>
                        </div>
                    </div>
                    <div className='metimes'>
                        <img src={idea} alt="idea"></img>
                        <div>
                            <h2>Cermat Pay</h2>
                            <p>Bishapay is a payment online so it's flexible to any payment.</p>
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
                        <img src={Values1} alt="Values1"></img>
                        <p><span>Easy to use apps</span><br></br>With a user-friendly display, it makes it easy for you to do any transactions</p>
                    </div>
                    <div className='values'>
                        <img src={Values2} alt="Values2"></img>
                        <p><span>Bishapay E-wallet</span><br></br>Convert money into electronic money so it's easy to store and use it</p>
                    </div>
                    <div className='values'>
                        <img src={Values3} alt="Values3"></img>
                        <p><span>Fast transfer to friends</span><br></br>Fellow bishapay friends can transfer quickly and free of charge</p>
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
                    <img src={UIUX} alt="idea"></img>
                    <p>UI/UX WEB/APP</p>
                </div>
                <div className='groupTeamImg'>
                    <img src={Mobile} alt="idea"></img>
                    <p>MOBILE APP</p>
                </div>
                <div className='groupTeamImg'>
                    <img src={team1} alt="idea"></img>
                    <p>BACK-END</p>
                </div>
                <div className='groupTeamImg'>
                    <img src={Frontend} alt="idea"></img>
                    <p>FRONT-END</p>
                </div>
                <div className='groupTeamImg'>
                    <img src={team1} alt="idea"></img>
                    <p>Quality engineers</p>
                </div>
                </div>
            </div>
        <Footer></Footer>
        </div>

    )
}



export default AboutUs
