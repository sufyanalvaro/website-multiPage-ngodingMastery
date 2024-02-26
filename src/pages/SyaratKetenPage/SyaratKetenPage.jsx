import "./SyaratKetenPage.css";

import { Container, Row, Col } from "react-bootstrap";
import FaqComponent from "../../components/FaqComponents/FaqComponent";

const SyaratKetenPage = () => {
  return (
    <div className="syarat-ketentuan-page">
      <div className="syarat-ketentuan min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center mb-2">Syarat & Ketentuan</h1>
              <p className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
                aspernatur, debitis ipsum quaerat enim nesciunt. Nam numquam ex
                perferendis sed cupiditate quod consectetur? Explicabo
                recusandae, tempora reprehenderit nulla ipsa veniam accusamus
                quis animi quaerat iusto enim aperiam in sit hic unde eveniet
                adipisci rerum sunt quo culpa? Rerum, fuga inventore.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default SyaratKetenPage;
