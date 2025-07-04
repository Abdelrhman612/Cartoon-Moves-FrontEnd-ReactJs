export interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignInData {
  email: string;
  password: string;
}
export interface DecodedToken {
  userId?: string;
  sub?: string;
  id?: string;
}
