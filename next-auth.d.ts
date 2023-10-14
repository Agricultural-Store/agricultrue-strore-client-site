// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      token: string;
      role: string;
      name: string;
      email: string;
    };
    token: string;
  }

  interface User {
    token: string;
    role: string;
    name: string;
    email: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    token: string;
  }
}
