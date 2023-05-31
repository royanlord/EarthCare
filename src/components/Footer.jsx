import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import "../css/footer.css";

export default function Footer() {
  return (
    <Container className="bg-success mt-5 p-4 text-white">
      <Row>
        <Col>
          <h1>EarthCare</h1>
          <p>&copy; 2023 All Rights reserved</p>
        </Col>
        <Col>
          <div className="content__footer">
            <h3>Content</h3>
            <ul className="">
              <li>Event</li>
              <li>Article</li>
            </ul>
          </div>
        </Col>
        <Col>
          <div className="about__footer">
            <h3>About Us</h3>
            <ul className="about__link">
              <li>About</li>
              <li>Our Team</li>
            </ul>
          </div>
        </Col>
        <Col>
          <div className="social__footer">
            <h3 className="text-center">Connect With Us</h3>
            <div className="icon__social text-center">
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
  );
}
