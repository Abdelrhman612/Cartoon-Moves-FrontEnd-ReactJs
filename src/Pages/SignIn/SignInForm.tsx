import { useState } from "react";
import { AuthService } from "../../Service/Auth/Auth.Service";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const HandleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await AuthService().SignIn({ email, password });
      alert("Sign In Successfully ✅");
    } catch (err) {
      console.error("Sign in error:", err);
      alert("Sign In Failed");
    }
  };
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
