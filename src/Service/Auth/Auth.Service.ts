import axios from "axios";
import type { SignInData, SignUpData } from "./Auth.InterFace";
import { SignInUrl, SignUpUrl } from "../api";
export const AuthService = () => {
  const SignUp = ({ firstName, lastName, email, password }: SignUpData) => {
    return axios.post(SignUpUrl, {
      firstName,
      lastName,
      email,
      password,
    });
  };
  const SignIn = async ({ email, password }: SignInData) => {
    const res = await axios.post(SignInUrl, {
      email,
      password,
    });
    return localStorage.setItem("Token", res.data.token);
  };
  return { SignUp, SignIn };
};
