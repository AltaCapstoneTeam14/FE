import React from 'react'
import Footer from "../../Components/Footer/Footer"
import Navbar from '../../Components/Navbar/Navbar'
import '../AboutUs/AboutUs.css'
import rocket from '../../Images/rocket.png'
import idea from '../../Images/idea.png'
import young from '../../Images/young.png'
import bussiness from '../../Images/bussiness.svg'
import p360 from '../../Images/360.svg'
import memb from '../../Images/member.png'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/scrollbar/scrollbar.min.css'


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])


function AboutUs() {
    return (

        <div>
            
            <Navbar />
            <Container className='about'>
               <Row className='title'>
                <h1>About Us</h1>
                <h3>Bishapay Build an ecosystem and payment platform as well as financial services that suit the needs of the middle class/aspirants in Indonesia.</h3>
               </Row>
                <Row className='solutionsContainer'>
                    <Col className='solutions'>
                        <h1>We Help To Get Solutions</h1>
                        <p>Encouraging financial inclusion and economic inclusion to encourage national economic growth.</p>
                        <div className='rocket'>
                            <Col className='payContainer' >
                                <><img src={rocket} className='valuesContent' /></>
                                <Col><h3>Rocket Pay</h3>
                                    <p>Inisiatif untuk mensejahterahkan masyarakat Indonesia melalui perluasan akses keuangan digital di berbagai aspek.</p></Col>

                            </Col>
                            <Col className='payContainer'>
                                <img src={idea} className='valuesContent2'/>
                                <Col><h3>Cermat Pay</h3>
                                    <p>Bishapay merupakan pembayaransecara online sehingga fleksibel untuk pembayaran apapun.</p></Col>


                            </Col>
                        </div>

                    </Col>
                    <div className='young'>
                        <img src={young} />
                    </div>
                </Row>
                <Row>
                    <Col className='ourValues'>
                        <h2 className='tagline'>Our Values</h2>
                        <img src={bussiness} />
                    </Col>
                    <Col>
                        <Row className='valuesContent'>
                            <img src={rocket} className='icons' />
                            <Col><p>Bergabunglah bersama kami untuk menjadi bagian dari bishapay</p></Col>
                        </Row>
                        <Row className='valuesContent'>
                            <><img src={idea} className='icons' /></>
                            <Col><p>Kami terus membangun ekosistem
                                untuk memudahkan para pengguna,
                                terutama untuk pembayaran kebutuhan
                                esensial harian</p></Col>
                        </Row>
                        <Row className='valuesContent'>
                            <><img src={p360} className='icons' /></>
                            <Col><p>Kami berbeda dengan yang lain
                                sehingga bishapay menjadi pilihan
                                terbaik buat kamu.</p></Col>
                        </Row>

                    </Col>
                </Row>
                <h2 className='tagline'>Our Team</h2>
                <Row className='ourTeamContainer'>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={4}
                        navigation
                        //pagination = {{ clickable: true}}
                        //scrollbar = {{ draggable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >



                        {member.map(data => {
                            return (
                                <SwiperSlide key={data.id}>
                                    <div className='ourTeam'>
                                        <img src={memb} className='img' />
                                        <p className='name'>{data.nama}</p>
                                    </div>

                                </SwiperSlide>
                            )
                        })}

                    </Swiper>
                </Row>
            </Container>
            <Footer />
        </div>

    )
}


const member = [
    {
        id: 1,
        nama: "Stephanus Dhimas"
    },
    {
        id: 2,
        nama: "Rizaq Afani"
    },
    {
        id: 3,
        nama: "Hamid Baehaqi"
    },
    {
        id: 4,
        nama: "Dhivas Dharma"
    },
    {
        id: 5,
        nama: "Amal Nur"
    },
    {
        id: 6,
        nama: "Alfi Arissandi"
    },
    {
        id: 7,
        nama: "Andira Azzahra"
    },
    {
        id: 8,
        nama: "Ghina Faraj Wati"
    },
    {
        id: 9,
        nama: "Juliana Damayanti"
    },
    {
        id: 10,
        nama: "Stephanus Dhimas"
    }
]

export default AboutUs
