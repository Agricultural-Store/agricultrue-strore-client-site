export const authApiBase = `/auth`;
export const userApiBase = `/user`;
export const productApiBase = `/product`;

export const authApi = {
  login: `${authApiBase}/login`,
  signUp: `${authApiBase}/sign-up`,
};

export const userApi = {
  me: `${userApiBase}/me`,
};

export const productApi = {
  list: `${productApiBase}`,
};
