import { Card, Col, Container, Row } from "react-bootstrap";
import SignUpForm from "./SignUpForm";
const SignUpCard = () => {
  return (
    <Container className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Card className="p-4shadow">
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              <SignUpForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpCard;
