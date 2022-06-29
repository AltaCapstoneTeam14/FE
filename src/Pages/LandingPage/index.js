import React from "react";
import style from "./style.module.css";
import { Container, Button, Row, Col, Card, CardGroup,} from "react-bootstrap";

// images
import image1 from "../../Images/images-1.png";
import image2 from "../../Images/image-2.png";
import image3 from "../../Images/image-3.png";
import wallet from "../../Images/Crypto Wallet.svg";
import coins from "../../Images/Coins three.svg";
import walletCard from "../../Images/Wallet Cards.svg";
import computer from "../../Images/computer.png";
import purpleShadow from "../../Images/Ellipse 12.png";
import news from "../../Images/news 1.png"
// icons
import { GoPrimitiveDot } from "react-icons/go";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";

// components
import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar";

function LandingPage() {
  
  return (
    <div>
      <div>
        <Navbar/>
        {/* HERO SECTION */}
        <Container>
          <Row>
            <Col>
              <div className={style.titleLanding}>
              <h1 className={style.tagline}>
                Start a Loyalty Program, <span>Rewards</span> Your Business!
              </h1>
              <div className={style.paragraphTitle}>
              <p>
                Our loyalty solutions is ideal for many types of business <br />{" "}
                and easy to use for you and your customers.
              </p>
              </div>
              </div>
              <Button className={style.button}>
                Learn more <BsChevronRight />
              </Button>
            </Col>

            <Col>
              <div className={style.imageLanding}>
              <img src={image1} alt="image1"/>
              </div>
            </Col>
          </Row>
        </Container>

        {/* WHO WE ARE SECTION */}
        <Container className={style.aboutUs}>
          <Row>
            <Col>
              <div className={style.imageLanding2}>
              <img src={image2} alt="image2" />
              </div>
            </Col>

            <Col>
              <p className={style.landingSection2}> <GoPrimitiveDot className={style.iconDot} /> WHO WE ARE </p>
              <h2 className={style.landingHeader2}>
                Upgrade your customer retention strategy with Bishapay loyalty solutions
              </h2>
              <div className={style.paragraphLanding}>
              <p>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deserunt ut voluptate aute id deserunt nisi.
              </p>
              </div>
            </Col>
          </Row>
        </Container>

        {/* WHAT WE DO SECTION */}
        <Container className={style.aboutUs}>
          <Row>
            <Col style={{ marginTop: "7rem" }}>
              <div className={style.titleLanding2}>
              <p className={style.landingSection2}> <GoPrimitiveDot className={style.iconDot} /> WHO WE ARE </p>
              <h2 className={style.landingHeader3}>
                Industry Leading Loyalty Solutions Made Easy
              </h2>
              <div className={style.paragraphLanding2}>
              <p>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deserunt ut voluptate aute id deserunt nisi.
              </p>
              </div>
              </div>
            </Col>

            <Col>
              <div className={style.imageLanding3}>
              <img src={image3} alt="image3"/>
              </div>
            </Col>
          </Row>
        </Container>

        {/* OUR PRODUCT SECTION */}
        <Container style={{ borderBottom: "2px solid #E5E5E5", paddingBottom: "8rem" }}>
          <h3 className={style.ourProducts}> OUR PRODUCTS </h3>
          <Row>
            <CardGroup>
              <Card className={style.card}>
                <Card.Img
                  variant="top"
                  src={wallet}
                  style={{
                    width: "96px",
                    marginLeft: "5rem",
                    marginTop: "2rem",
                    marginBottom: "3rem",
                  }}
                />
                <Card.Body>
                  <Card.Title>E-Money</Card.Title>
                </Card.Body>
              </Card>
              <Card className={style.card}>
                <Card.Img
                  variant="top"
                  src={coins}
                  style={{
                    width: "96px",
                    marginLeft: "5rem",
                    marginTop: "2rem",
                    marginBottom: "3rem",
                  }}
                />
                <Card.Body>
                  <Card.Title>Loyalty Point</Card.Title>
                </Card.Body>
              </Card>
              <Card className={style.card}>
                <Card.Img
                  variant="top"
                  src={walletCard}
                  style={{
                    width: "96px",
                    marginLeft: "5rem",
                    marginTop: "2rem",
                    marginBottom: "3rem",
                  }}
                />
                <Card.Body>
                  <Card.Title>Financial Management</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
          </Row>
        </Container>

        {/* LOYALTY POINT SECTION */}
        <Container
          style={{
            marginTop: "5rem",
            borderBottom: "2px solid #E5E5E5",
            paddingBottom: "8rem",
            marginBottom: "3rem"
          }}
        >
          <Row>
            <Col>
              <img
                src={computer}
                style={{ zIndex: "2", position: "relative" }} alt="computer"
              />
              <img
                src={purpleShadow}
                style={{
                  zIndex: "1",
                  position: "absolute",
                  marginTop: "-15rem",
                  marginLeft: "-40rem",
                }}
                alt="purpleShadow"
              />
            </Col>

            <Col className={style.columnLoyaltyPoint}>
              <h3 className={style.loyaltyPoint}> Loyalty Point <span> By Bishapay </span> </h3>
              <p className={style.teksLoyaltyPoint}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </Col>
          </Row>
        </Container>

        {/* FAQ SECTION */}
        <Container>
          <div className={style.frequently}>
            <h3>Frequently asked questions <BsChevronDown style={{ marginLeft: "2rem" }} /></h3>
          </div>

          <div className={style.box}>
            <img src={news} alt="news"/>
            <p>Subcribe to our Newsletter</p>

            <div className={style.form}>
              <input className={style.inputEmail} type="text" placeholder="Enter Email Address"></input>
              <button className={style.subscribeButton}>
                Subscribe
              </button>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
    
  );
}

export default LandingPage;
