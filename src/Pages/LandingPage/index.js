import React from "react";
import style from "./style.module.css";
import {
  Container,
  Button,
  Row,
  Col,
  Card,
  CardGroup,
} from "react-bootstrap";

// images
import image1 from "../../Assets/Images/images-1.png";
import image2 from "../../Assets/Images/image-2.png";
import image3 from "../../Assets/Images/image-3.png";
import wallet from "../../Assets/Images/Crypto Wallet.svg";
import coins from "../../Assets/Images/Coins three.svg";
import walletCard from "../../Assets/Images/Wallet Cards.svg";
import computer from "../../Assets/Images/computer.png";
import purpleShadow from "../../Assets/Images/Ellipse 12.png";
import news from "../../Assets/Images/news 1.png"
// icons
import { GoPrimitiveDot } from "react-icons/go";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
// components
import Footer from "../../Components/Footer/Footer"



function LandingPage() {
  return (
    <div>
      <div>
        
        {/* HERO SECTION */}
        <Container>
          <Row>
            <Col>
              <div className={style.titleLanding}>
              <h1 className={style.tagline}>
                Start a Loyalty <br /> Program,{" "}
                <span style={{ color: "#605CFF" }}>Rewards</span>
                <br /> Your Business!
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
              <img src={image1} />
              </div>
            </Col>
          </Row>
        </Container>

        {/* WHO WE ARE SECTION */}
        <Container className={style.aboutUs}>
          <Row>
            <Col>
              <div className={style.imageLanding2}>
              <img src={image2} />
              </div>
            </Col>

            <Col>
              <p
                style={{
                  color: "#C4C4C4",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                <GoPrimitiveDot className={style.iconDot} />
                WHO WE ARE{" "}
              </p>
              <h2>
                Upgrade your customer <br /> retention strategy with <br />{" "}
                Bishapay loyalty solutions
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
              <p
                style={{
                  color: "#C4C4C4",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                <GoPrimitiveDot className={style.iconDot} />
                WHAT WE DO
              </p>
              <h2>
                Industry Leading Loyalty <br /> Solutions Made Easy
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
              <img src={image3} />
              </div>
            </Col>
          </Row>
        </Container>

        {/* OUR PRODUCT SECTION */}
        <Container
          style={{ borderBottom: "2px solid #E5E5E5", paddingBottom: "8rem" }}
        >
          <h3
            style={{
              textAlign: "center",
              color: "#605CFF",
              marginTop: "70px",
            }}
          >
            OUR PRODUCTS
          </h3>
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
                style={{ zIndex: "2", position: "relative" }}
              />
              <img
                src={purpleShadow}
                style={{
                  zIndex: "1",
                  position: "absolute",
                  marginTop: "-15rem",
                  marginLeft: "-40rem",
                }}
              />
            </Col>

            <Col className={style.columnLoyaltyPoint}>
              <h3>
                Loyalty Point <br />{" "}
                <span style={{ fontSize: "22px", color: "#605CFF" }}>
                  By Bishapay
                </span>
              </h3>
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
          <h3 className="text-center fw-bold" style={{marginBottom:"7rem"}}>
            Frequently asked questions{" "}
            <BsChevronDown style={{ marginLeft: "2rem" }} />
          </h3>

          <div className={style.box}>
            <img
              src={news}
              className={style.news}
            />
            <p className={style.newsletter}>Subcribe to our Newsletter</p>

            <div className={style.form}>
              <input className={style.inputEmail} type="text" placeholder="Enter your Email Address"></input>
              <button className={style.subscribeButton}>
                Subscribe
                <div className={style.arrowSubs}>
                  <BsArrowRight />
                </div>
                </button>
            </div>
          </div>
        </Container>
      </div>

      {/* <Footer /> */}
    </div>
    
  );
}

export default LandingPage;
