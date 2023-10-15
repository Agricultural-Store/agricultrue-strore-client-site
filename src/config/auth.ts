import { AuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { authApi, userApi } from "./api-path";
import { ApiResponse } from "@/types/shared";
import { Me } from "@/types/user";
import appConfig from "./env";

const log = (action: string, message: string, data?: unknown) => {
  console.log(
    `🛡️  - ${new Date().toLocaleString()} - NextAuth: [${action}] ${message}`,
    data ?? "",
  );
};

const authOptions: AuthOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: appConfig.GOOGLE_ID,
    //   clientSecret: appConfig.GOOGLE_SECRET,
    // }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        log("authorize", `${credentials?.email} | ${req.headers}`);

        try {
          const res = await fetch(appConfig.API_HOST + authApi.login, {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
            headers: { "Content-Type": "application/json" },
          });
          const user = await res.json();

          // If no error and we have user data, return it
          if (res.ok && user) {
            return user.data;
          }
        } catch (error) {
          log("authorize", `Error:`, error);
        }

        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.token = user.token;
        console.log(token.token);
        const profile = await fetch(appConfig.API_HOST + userApi.me, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token?.at}`,
          },
        });
        if (profile.status === 200) {
          const profileJson: ApiResponse<Me> = await profile.json();
          token.email = profileJson.data.email;
          token.name = profileJson.data.name;
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.token = token.token;
      session.user.email = token.email || "";
      session.user.email = token.name || "";
      return session;
    },

    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },

    async signIn({ user }) {
      if (user.token) return true;
      return false;
    },
  },
};

export default authOptions;
