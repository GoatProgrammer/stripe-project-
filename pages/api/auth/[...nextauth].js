import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { SupabaseAdapter } from "@next-auth/supabase-adapter"
import jwt from "jsonwebtoken"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL,
    secret: process.env.SUPABASE_SECRET,
  }),
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      const signingSecret = "O4a6XZ+g0wTakgL8TSxW6gn1OJkrHdmTTt+gx3Bokysip+bXKpIJRwgnIF0NKhoh6IzmSTYPQbnIbkdWKXkeQg=="
      if (signingSecret) {
        const payload = {
          aud: "authenticated",
          exp: Math.floor(new Date(session.expires).getTime() / 1000),
          name: user.name,
          sub: user.id,
          email: user.email,
          uid: user.id,
          image: user.image,
          role: "authenticated",
        }
        console.log(payload)
        session.supabaseAccessToken = jwt.sign(payload, signingSecret)
        // return payload
        session = payload

      }


      return session

    }
  }
}
export default NextAuth(authOptions)