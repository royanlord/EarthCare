import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import "../css/footer.css";
import logo from "../assets/logo-earthcare.png";

export default function Footer() {
  return (
    <footer className="mt-5">
      <Container className="component__footer">
        <Row className="ro">
          <Col xs={12} md={3} lg={3}>
            <h1>
              <img className="me-1" src={logo} alt="logo" />
              EarthCare
            </h1>
            <p>&copy; 2023 All Rights reserved</p>
          </Col>
          <Col xs={12} md={3} lg={3}>
            <div className="content__footer">
              <h3>Content</h3>
              <ul>
                <li>
                  <a href="#">Event</a>
                </li>
                <li>
                  <a href="#">Article</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={3} lg={3}>
            <div className="about__footer">
              <h3>About Us</h3>
              <ul className="about__link">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={3} lg={3}>
            <div className="social__footer">
              <h3>Connect With Us</h3>
              <div className="icon__social">
                <span className="pe-3">
                  <FaInstagram />
                </span>
                <span className="pe-3">
                  <FaTwitter />
                </span>
                <span className="pe-3">
                  <FaYoutube />
                </span>
                <span className="pe-3">
                  <FaFacebook />
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
