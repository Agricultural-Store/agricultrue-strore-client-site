import appConfig from "./env";

export const authApi = {
  login: `${appConfig.API_HOST}/auth/login`,
  signUp: `${appConfig.API_HOST}/auth/sign-up`,
};

export const userApi = {
  me: `${appConfig.API_HOST}/user/me`,
};
