import { useState } from "react";
import { AuthService } from "../../Service/Auth/Auth.Service";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await AuthService().SignUp({
        firstName,
        lastName,
        email,
        password,
      });

      alert("Sign Up Successfully ✅");
    } catch (error) {
      console.error("Sign Up Error:", error);
      alert("Sign Up Failed");
    }
  };

  return (
    <Form onSubmit={HandleSignUp}>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Your FirstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Your LastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Examble@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Choose a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <div className="d-grid">
        <Button variant="primary" type="submit" className="fw-bold py-2">
          Sign Up
        </Button>
      </div>
      <div className="text-center py-3">
        <Link to="/">Sign In</Link>
      </div>
    </Form>
  );
};

export default SignUpForm;
