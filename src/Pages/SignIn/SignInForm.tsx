import { Button, Form } from "react-bootstrap";
import { Link } from "react-router";
import UseAuth from "../../Hooks/UseAuth";

const SignInForm = () => {
  const { email, setEmail, password, setPassword, HandleSignIn } =
    UseAuth().useSignIn();
  return (
    <Form onSubmit={HandleSignIn}>
      <Form.Group className="mb-3">
        <Form.Label>email</Form.Label>
        <Form.Control
          type="email"
          placeholder="enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>password</Form.Label>
        <Form.Control
          type="password"
          placeholder="enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <div className="d-grid">
        <Button variant="primary" type="submit" className="fw-bold py-2">
          Sign In
        </Button>
      </div>
      <div className="text-center py-3">
        <Link to="/signUp">Sign Up</Link>
      </div>
    </Form>
  );
};

export default SignInForm;
