export const authApiBase = `/auth`;
export const userApiBase = `/user`;
export const productApiBase = `/product`;
export const productComboApiBase = `/product-combo`;
export const orderApiBase = `/order`;
export const newsApiBase = `/news`;

export const authApi = {
  login: `${authApiBase}/login`,
  signUp: `${authApiBase}/sign-up`,
};

export const userApi = {
  me: `${userApiBase}/me`,
  cart: `${userApiBase}/cart`,
  addToCart: `${userApiBase}/cart`,
  changeCart: (id?: number) => `${userApiBase}/cart/${id}`,
  address: `${userApiBase}/address`,
  createAddress: `${userApiBase}/address`,
  forgotPassword: `${userApiBase}/forgot-password`,
  otp: `${userApiBase}/verification`,
  changePassword: `${userApiBase}/change-password`,
  deleteAddress: (id?: number) => `${userApiBase}/address/${id}`,
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
};

export const orderApi = {
  create: `${orderApiBase}`,
};

export const newsApi = {
  list: newsApiBase,
};
