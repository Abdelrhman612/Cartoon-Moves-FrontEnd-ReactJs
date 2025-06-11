import { Card, Col, Container, Row } from "react-bootstrap";
import SignInForm from "./SignInForm";

const SignInCard = () => {
  return (
    <Container className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <Col xs={12} md={6} lg={4}>
        <Row className="w-100 justify-content-center">
          <Card className="p-4 shadow">
            <Card.Body>
              <h2 className="text-center mb-4"> Sign In</h2>
              <SignInForm />
            </Card.Body>
          </Card>
        </Row>
      </Col>
    </Container>
  );
};

export default SignInCard;
