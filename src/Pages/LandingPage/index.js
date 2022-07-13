import style from "./style.module.css";
import { Container, Button, Row, Col, Card, CardGroup } from "react-bootstrap";
import React, { useState } from "react";

// images
import image1 from "../../Images/images-1.png";
import image2 from "../../Images/image-2.png";
import image3 from "../../Images/image-3.png";
import wallet from "../../Images/Crypto Wallet.svg";
import coins from "../../Images/Coins three.svg";
import walletCard from "../../Images/Wallet Cards.svg";
import computer from "../../Images/computer.png";
// icons
import { GoPrimitiveDot } from "react-icons/go";

// components
import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar";
import NavAdmin from "../../Components/Navbar/NavAdmin";
import authService from "../../Services/auth-services";

function ReadMore({children = 100}) {

  const text = children;

  const [isShow, setIsShowLess] = useState(true)
  const result = isShow ? text.slice(0, 100) : text;

  function toggleIsShow() {
      setIsShowLess((!isShow));
  }

  return(
      <p>
          {result}
          <Button className={style.button} onClick={toggleIsShow}>
          {isShow ? "Read More  >" : "Read Less <"}
          </Button>
      </p>
  )

}

const LandingPage = () => { 
  const user = authService.getCurrentUser();
    let auth = false
    if (user) {
      auth = true
    }
  return (
    <div>
      <div>
        {
          auth ? <NavAdmin/> : <Navbar/>
        }
        {/* HERO SECTION */}
        <Container>
          <Row>
            <Col>
              <div className={style.titleLanding}>
              <h1 className={style.tagline}>
                Start a Loyalty Program, <span>Rewards</span> Your Business!
              </h1>
              <div className={style.paragraphTitle}>
              <ReadMore>
              Bishapay is a loyalty application that is simple and easy to use. Our loyalty solutions are ideal for any type of business and easy to use for you. You will also get many benefits from the various transactions in bishapay. enjoy the convenience, enjoy the benefits.
              </ReadMore>
              </div>
              </div>
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
                Get convenience in every transaction with the bishapay loyalty program. bishapay is a customer loyalty management solutions provider committed to providing the most comprehensive range of customer retention and engagement solutions.
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
              We are here to facilitate transactions for your daily needs so that you can get excess profits with all the conveniences
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
                style={{ zIndex: "2", position: "static", }} alt="computer"
              />
            </Col>

            <Col className={style.columnLoyaltyPoint}>
              <h3 className={style.loyaltyPoint}> Loyalty Point <br></br><span style={{marginLeft: "0px"}}> By Bishapay </span> </h3>
              <p className={style.teksLoyaltyPoint}> There is a loyalty feature for you to save money and get lots of discounts by transacting on bishapay. enjoy the convenience, enjoy the benefits.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
    
  );
}

export default LandingPage;
