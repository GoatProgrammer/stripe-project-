import { useSession, signIn, signOut } from "next-auth/react"
export default function AccessToken() {
  const { data } = useSession()
  const { accessToken } = data

  console.log("data shit", data)

  return <div>Access Token: {accessToken}</div>
}