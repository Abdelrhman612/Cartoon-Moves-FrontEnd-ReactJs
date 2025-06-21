// src/Service/Auth/AuthService.ts
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import type { DecodedToken, SignInData, SignUpData } from "./Auth.InterFace";
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
    const res = await axios.post(SignInUrl, { email, password });

    const token = res.data.token;
    localStorage.setItem("Token", token);

    try {
      const decoded = jwtDecode<DecodedToken>(token);
      const userId = decoded.userId || decoded.sub || decoded.id;

      if (userId) {
        localStorage.setItem("UserId", userId);
      } else {
        console.error("❌ userId not found in token payload");
      }
    } catch (err) {
      console.error("❌ Failed to decode token:", err);
    }

    return token;
  };

  return { SignUp, SignIn };
};
