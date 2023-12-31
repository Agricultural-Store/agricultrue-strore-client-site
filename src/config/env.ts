const appConfig = {
  API_HOST: process.env.NEXT_PUBLIC_API_HOST || "",
  FILE_HOST: process.env.NEXT_PUBLIC_FILE_HOST || "",
  GOOGLE_ID: process.env.GOOGLE_ID || "",
  GOOGLE_SECRET: process.env.GOOGLE_SECRET || "",
  NEXT_AUTH_SECRET: "_OSId_ds_sdo_dsc_ddf",
  NEXTAUTH_CREDENTIAL_LOGIN_URL: process.env.NEXTAUTH_CREDENTIAL_LOGIN_URL || "",
  PAYMENT_KEY: process.env.NEXT_PUBLIC_PAYMENT_KEY || "",
  PUBLIC_URL: process.env.NEXT_PUBLIC_URL || "",
};

export default appConfig;
