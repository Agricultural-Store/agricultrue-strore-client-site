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

export interface UserProfile {
  name: string;
  mail: string;
  phone: string;
  birthday: string;
  addressDetail: string;
  district: string;
  commune: string;
  province: string;
  avatar: string;
}
