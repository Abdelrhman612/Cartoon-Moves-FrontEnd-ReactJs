/// <reference types="vite/client" />
const api_Service = import.meta.env.VITE_API_SERVICE_URL;
export const SignUpUrl = `${api_Service}/auth/sign-up`;
export const SignInUrl = `${api_Service}/auth/sign-in`;
export const MovieUrl = `${api_Service}/movie`;
