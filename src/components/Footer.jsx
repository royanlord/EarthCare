import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import "../css/footer.css";
import logo from "../assets/logo-earthcare.png";

export default function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid className="component__footer">
        <Row className="d-flex justify-content-sm-start justify-content-lg-evenly flex-wrap">
          <Col
            xs={12}
            md={3}
            sm={3}
            className="d-flex align-items-lg-center align-items-sm-start flex-column text-start"
          >
            <h1>
              <img className="me-1" src={logo} alt="logo" />
              EarthCare
            </h1>
            <p>&copy; 2023 All Rights reserved</p>
          </Col>
          <Col
            xs={12}
            md={3}
            sm={3}
            className="d-flex align-items-lg-center align-items-sm-start flex-column text-start "
          >
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
          <Col
            xs={12}
            md={3}
            sm={3}
            className="d-flex align-items-lg-center align-items-sm-start flex-column text-start"
          >
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
          <Col
            xs={12}
            md={3}
            sm={3}
            className="d-flex align-items-lg-center align-items-sm-start flex-column text-start col"
          >
            <div className="social__footer">
              <h3 className="text-center text-lg-start">Connect With Us</h3>
              <div className="icon__social d-flex justify-content-center justify-content-lg-start">
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
