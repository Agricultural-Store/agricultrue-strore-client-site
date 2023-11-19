import { Product } from "./product";
import { ListOptions } from "./shared";

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
  images?: string[];
}

export type UserUpdateInput = Partial<UserProfile> & {
  address?: string;
  country?: string;
  detailAddress?: string;
  email?: string;
  city?: string;
};

export interface UserOrder {
  id: number;
  city?: string;
  district?: string;
  commune?: string;
  address?: string;
  phone?: string;
  paymentMethod?: string;
  totalPrice?: string;
  discountPrice?: string;
  temporaryPrice?: string;
  status?: string;
  customerName?: string;
  email?: string;
  userId?: number;
  isDeleted?: boolean;
  createAt?: Date;
  updateAt?: Date;
  note?: string;
  productOrders?: Product[];
}

export interface UserOrderFilterParams extends ListOptions<UserOrder> {}
