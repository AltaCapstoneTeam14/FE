import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Footer/Footer.css";
import twitter from "../../Images/Twitter.png";
import facebook from "../../Images/Facebook.png";
import instagram from "../../Images/Instagram.png";
import Scroll from "../Scroll/Scroll";


function Footer() {
  return (
    <>
    <Scroll />
      <div className="footer">
        <Container>
          <Row>
            <Col sm={4} className="contentFooter">
              <h6>About Us </h6>
              <h3>Bishapay </h3>
              <p>
                Bishapay is a thinking company on a mission to connect people
                and businesses with meaningful innovation.{" "}
              </p>
              <div className="socialMedia">
                <img src={twitter} alt="twitter"></img>
                <img src={facebook} alt="facebook"></img>
                <img src={instagram} alt="instagram"></img>
              </div>
            </Col>
            <Col className="contentFooter">
              <h6>Solutions </h6>
              <p>Help Center </p>
              <p>Point Loyalty </p>
              <p>Get Point</p>
            </Col>
            <Col className="contentFooter">
              <h6>Article </h6>
              <p>Promo </p>
            </Col>
            <Col className="contentFooter">
              <h6>About Us </h6>
              <p>About Bishapay </p>
              <p>FAQ </p>
              <p>Products</p>
              <p>Contact Us</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Footer;
