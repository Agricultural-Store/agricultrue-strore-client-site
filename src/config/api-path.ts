export const authApiBase = `/auth`;
export const userApiBase = `/user`;
export const productApiBase = `/product`;
export const productComboApiBase = `/product-combo`;

export const authApi = {
  login: `${authApiBase}/login`,
  signUp: `${authApiBase}/sign-up`,
};

export const userApi = {
  me: `${userApiBase}/me`,
  cart: `${userApiBase}/cart`,
  addToCart: `${userApiBase}/cart`,
  address: `${userApiBase}/address`,
  createAddress: `${userApiBase}/address`,
};

export const productApi = {
  list: `${productApiBase}`,
  detail: (id: number) => `${productApiBase}/${id}`,
  productRating: (id: number) => `${productApiBase}/${id}/rating`,
};

export const productComboApi = {
  list: `${productComboApiBase}`,
};
