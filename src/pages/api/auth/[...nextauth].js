import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider  from 'next-auth/providers/credentials';

export const authOptions = {
 providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    authorization: {
        params: {
        prompt: "consent",
        access_type: "offline",
        response_type: "code"
      }
    },
    useSecureCookies: process.env.NEXTAUTH_URL.startsWith("https://"),
  }),
  CredentialsProvider({
    name: 'Credentials',
    credentials: {
      username: { type: "email" },
      password: { type: "password" }
    },
    async authorize(credentials) {
      //console.log('auth');
      if (credentials.username === 'admin@gmail.com' && credentials.password === 'admin#123') {
        //console.log('sucess');
        return Promise.resolve({ name: 'User' });
      } else {
        //console.log('fail');
        return Promise.resolve(null);
      }
    },
  }),
 ],
 secret: process.env.NEXTAUTH_SECRET,
 callbackUrl: process.env.NEXTAUTH_URL,
 callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
    return true;
  },
  async redirect({ url, baseUrl }) {
    return baseUrl;
  },
  async session({ session, user, token }) {
    return session;
  },
  async jwt({ token, user, account, profile, isNewUser }) {
    return token;
  }
 }
};
export default NextAuth(authOptions);
