export interface Me {
  name?: string;
  email?: string;
}

export interface ForgotPasswordInput {
  email: string;
}

export interface OTP {
  token: string;
}

export interface OTPInput {
  email: string;
  otp: string;
}

export interface ChangePasswordInput {
  confirmPassword: string;
  newPassword: string;
}
