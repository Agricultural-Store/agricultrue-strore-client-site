export interface Login {
  token?: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface SignUpInput {
  email: string;
  name: string;
  password: string;
}

export interface SignUpValidateInput {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}
