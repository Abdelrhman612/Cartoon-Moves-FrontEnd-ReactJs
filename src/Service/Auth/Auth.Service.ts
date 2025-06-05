import axios from "axios";
import type { SignUpData } from "./Auth.InterFace";
import { SignUpUrl } from "../api";
export const AuthService = () => {
  const SignUp = ({ firstName, lastName, email, password }: SignUpData) => {
    return axios.post(SignUpUrl, {
      firstName,
      lastName,
      email,
      password,
    });
  };
  return { SignUp };
};
