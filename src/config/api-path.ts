export const authApiBase = `/auth`;
export const userApiBase = `/user`;
export const productApiBase = `/product`;
export const productComboApiBase = `/product-combo`;
export const orderApiBase = `/order`;
export const newsApiBase = `/news`;
export const paymentApiBase = `/payment`;

export const authApi = {
  login: `${authApiBase}/login`,
  signUp: `${authApiBase}/sign-up`,
};

export const userApi = {
  me: `${userApiBase}/me`,
  profile: `${userApiBase}/profile`,
  updateProfile: `${userApiBase}/profile`,
  cart: `${userApiBase}/cart`,
  addToCart: `${userApiBase}/cart`,
  changeCart: (id?: number) => `${userApiBase}/cart/${id}`,
  address: `${userApiBase}/address`,
  createAddress: `${userApiBase}/address`,
  updateAddress: (id?: number) => `${userApiBase}/address/${id}`,
  forgotPassword: `${userApiBase}/forgot-password`,
  otp: `${userApiBase}/verification`,
  changePassword: `${userApiBase}/change-password`,
  deleteAddress: (id?: number) => `${userApiBase}/address/${id}`,
  deleteCart: (id?: number) => `${userApiBase}/cart/${id}`,
  order: `${userApiBase}/order`,
  orderDetail: (id?: number) => `${userApiBase}/order/${id}`,
  updateOrderStatus: (id?: number) => `/order/status/${id}`,
  favorite: `${userApiBase}/favorites`,
  deleteFavorite: (id?: number) => `${userApiBase}/favorites/${id}`,
  addFavorite: (id?: number) => `${userApiBase}/favorites/${id}`,
  updateProfileImage: `${userApiBase}/profile/image`,
};

export const productApi = {
  list: `${productApiBase}`,
  detail: (id: number) => `${productApiBase}/${id}`,
  productRating: (id?: number) => `${productApiBase}/${id}/rating`,
  productRatingCreate: (id?: number) => `${productApiBase}/${id}/rating`,
};

export const productComboApi = {
  list: `${productComboApiBase}`,
  detail: (id?: number) => `${productComboApiBase}/${id}`,
  comboRating: (id?: number) => `${productComboApiBase}/rating/${id}`,
  comboRatingCreate: (id?: number) => `${productComboApiBase}/rating/${id}`,
};

export const orderApi = {
  create: `${orderApiBase}`,
};

export const newsApi = {
  list: newsApiBase,
};

export const paymentApi = {
  createPaymentKey: `${paymentApiBase}/create`,
};
