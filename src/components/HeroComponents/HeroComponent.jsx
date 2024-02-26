import "./HeroComponent.css";

import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../../assets/img/hero.png";

import { useNavigate } from "react-router-dom";

const HeroComponent = () => {
  let navigate = useNavigate();
  return (
    <div>
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-4">
                Temukan
                <br />
                <span>Bakat Kreatifmu</span>
                <br />
                Bersama Kami
              </h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                illo beatae suscipit quidem quibusdam ab.
              </p>
              <button
                className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2"
                onClick={() => navigate("/kelas")}
              >
                Lihat Kelas
              </button>
              <button className="btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2">
                Lihat Promo
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img
                src={HeroImage}
                alt="hero-img"
                className="animate__animated animate__fadeInUp"
              />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default HeroComponent;
