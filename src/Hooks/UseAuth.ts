import { useState } from "react";
import { useNavigate } from "react-router";
import { AuthService } from "../Service/Auth/Auth.Service";

export const UseAuth = () => {
  const useSignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const HandleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        await AuthService().SignIn({ email, password });
        alert("Sign In Successfully ✅");
        navigate("/home");
      } catch (err) {
        console.error("Sign in error:", err);
        alert("Sign In Failed");
      }
    };
    return { email, setEmail, password, setPassword, HandleSignIn };
  };
  const useSignUp = () => {
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

    return {
      firstName,
      setFirstName,
      lastName,
      setLastName,
      email,
      setEmail,
      password,
      setPassword,
      HandleSignUp,
    };
  };
  return { useSignIn, useSignUp };
};

export default UseAuth;
